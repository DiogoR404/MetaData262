var p = require('esprima').parse
var g = require('escodegen').generate


function analyseStatement(stmt, gamma){
    function analyseStmt(stmt){
        var gamma_copy = Object.assign({}, gamma)
        analyseStatement(stmt, gamma_copy);
        for (var obj in gamma) {
            if (obj in gamma_copy && gamma[obj] !== gamma_copy[obj]) {
                delete gamma[obj]
                delete gamma_copy[obj]
            }
        }
        gamma = Object.assign(gamma, gamma_copy);
    }

    function analyseExpr(stmt) {
        var gamma_copy = Object.assign({}, gamma)
        var type = analyseExpression(stmt, gamma_copy);
        for (var obj in gamma) {
            if (obj in gamma_copy && gamma[obj] !== gamma_copy[obj]) {
                delete gamma[obj]
                delete gamma_copy[obj]
            }
        }
        gamma = Object.assign(gamma, gamma_copy);
        return type
    }

    if(stmt ===undefined){
        return;
    }

    switch(stmt.type) {
        case "Program":
            stmt.body.map(analyseStmt);
        case "IfStatement":
            analyseExpr(stmt.test);
            analyseStmt(stmt.consequent);
            if (stmt.alternate !== null)
                analyseStmt(stmt.alternate);
            break;
        case "BlockStatement":
            stmt.body.map(analyseStmt);
            break;
        case "DoWhileStatement":
            analyseStmt(stmt.body);
            analyseExpr(stmt.test);
            break;
        case "ForStatement":
            if (stmt.init !== null)
                analyseExpr(stmt.init);
            if (stmt.test !== null)
                analyseExpr(stmt.test);
            if (stmt.update !== null)
                analyseExpr(stmt.update);
            analyseStmt(stmt.body);
            break;
        case "ForInStatement":
        case "ForOfStatement":
            analyseStmt(stmt.body);
            analyseExpr(stmt.left);
            analyseExpr(stmt.right);
            break;
        case "ExpressionStatement":
            analyseExpr(stmt.expression);
            break;
        case "ReturnStatement":
        case "ThrowStatement":
            analyseStmt(stmt.argument);
            break;
        case "ContinueStatement":
        case "BreakStatement":
            analyseExpr(stmt.label);
            break;
        case "CatchClause":
            analyseExpr(stmt.param);
            analyseStmt(stmt.body);
            break;
        case "WhileStatement":
            analyseExpr(stmt.test);
            analyseStmt(stmt.body);
            break;
        case "WithStatement":
            analyseExpr(stmt.object);
            analyseStmt(stmt.body);
            break;
        case "LabelledStatement":
            analyseExpr(stmt.label);
            analyseStmt(stmt.body);
        case "VariableDeclaration":
            stmt.declarations.map(analyseStmt);
            break;
        case "VariableDeclarator":
            if (stmt.init !== null){
                gamma[stmt.id.name] = analyseExpr(stmt.init);
            }
            break;
        case "SwitchStatement":
            analyseExpr(stmt.discriminant);
            stmt.cases.map(analyseStmt);
            break;
        case "SwitchCase":
            analyseExpr(stmt.test);
            stmt.consequent.map(analyseStmt);
            break;
        case "TryStatement":
            analyseStmt(stmt.block);
            if (stmt.handler!== null)
                analyseStmt(stmt.handler);
            if (stmt.finalizer !==null)
                analyseStmt(stmt.finalizer);
        default:
            break;
    }
}

function analyseExpression(expr, gamma){

    function analyse(expr){
        var gamma_copy = Object.assign({}, gamma)
        var type = analyseExpression(expr, gamma_copy); 
        gamma = Object.assign(gamma, gamma_copy);
        return type;
    }
    if(expr ===undefined){
        return;
    }
    switch(expr.type){
        case "NewExpression":
            expr.arguments.map(analyse);
            return expr.callee.name;
        case "AssignPattern":
        case "AssignmentExpression":
            if (expr.left.type === "Identifier"){
                var type = analyse(expr.right);
                if (gamma[expr.left.name]===undefined){
                    gamma[expr.left.name] = type;
                }else {
                    delete gamma[expr.left.name]
                }
                return type;
            }
        case "ArrayExpression":
            expr.elements.map(analyse);
            return "Array";
        case "ObjectPattern":
        case "ObjectExpression":
            expr.properties.map(analyse);
            return "Object";
        case "UpdateExpression":
            analyseExpression(expr.argument, gamma);
            return "number"
        case "Logical Expression":
            var left = analyseExpression(expr.left, gamma);
            var right = analyseExpression(expr.right, gamma);
            return "boolean"
        case "SequenceExpression":
            expr.expressions.map(analyse)
        case "Literal":
            return typeof expr.value;
        case "Identifier":
            return gamma[expr.name];
        case "Property":
            analyseExpression(expr.key, gamma);
            return analyse(expr.value);
        case "BinaryExpression":
            var left = analyseExpression(expr.left, gamma);
            var right = analyseExpression(expr.right, gamma);
            if (expr.operator === "+") {
                if (right ==="string" || left ==="string"){
                    return "string"
                } else {
                    return "number"
                }
            } else if (expr.operator === "-" || expr.operator === "*" || expr.operator === "**" || expr.operator === "/" || expr.operator === "%" || expr.operator === "^" || expr.operator === "|" || expr.operator === "&"){
                if (right ==="string" || left ==="string"){
                    return "null"
                } else {
                    return "number"
                }
            } else 
                return "boolean"
        case "ConditionalExpression":
            analyseExpression(expr.test, gamma);
            var consequent = analyse(expr.consequent);
            var alternate = analyse(expr.alternate);
            if (consequent === alternate)
                return consequent;
        case "ArrowFunctionExpression":
        case "FunctionExpression":
            analyseExpression(expr.id, gamma)
            expr.params.map(analyse);
            return analyseStatement(expr.body, gamma);
        case "ClassExpression":
            return analyseStatement(expr.body, gamma);
        case "AwaitExpression":
        case "YieldExpression":
            return analyseExpression(expr.argument, gamma);
        case "TaggedTemplateExpression":
            analyseExpression(expr.tag, gamma);
            return analyseExpression(expr.quasi, gamma);
        case "TemplateLiteral":
            expr.quasis.map(analyse);
            expr.expressions.map(analyse);
            return "string";
        case "UnaryExpression":
        case "SpreadElement":
            return analyse(expr.argument);
        
        case "CallExpression":
            expr.arguments.map(analyse);
            return analyseExpression(expr.callee, gamma);
        case "MemberExpression":
            break;
        default:
            break
    }
}

function readFileContent(file) {
    const fs = require('fs')
    return fs.readFileSync(file, 'utf8')

}

var fileToAnalyse = process.argv[2];

var program_text = readFileContent(fileToAnalyse)

var program = p(program_text);

var gamma={}

//analyseStatement(program, gamma)

//console.log(JSON.stringify(gamma));
module.exports = analyseStatement
