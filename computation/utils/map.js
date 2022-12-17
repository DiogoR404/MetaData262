var p = require('esprima').parse
var g = require('escodegen').generate


function readFileContent(file) {
    const fs = require('fs')
    return fs.readFileSync(file, 'utf8')

}

function map(mapper, stmt){
    function t1(stmt){
        return map(mapper, stmt)
    }

    if (!stmt) return stmt

    //console.log(stmt)

    switch(stmt.type){
        case "Program": {
            
            var new_stmt = {
                body:stmt.body.map(t1),
                type:"Program"
            }
            return mapper(new_stmt)
        }
        case "ArrayPattern" : {
            var new_stmt = {
                type: stmt.type,
                elements: stmt.elements.map(t1)
            }
            return mapper(new_stmt)
        }
        case "RestElement" : {
            var new_stmt = {
                type: stmt.type,
                argument: t1(stmt.argument)
            }
            return mapper(new_stmt)
        }
        case "AssignmentPattern": {
            var new_stmt = {
                type: stmt.type,
                left: t1(stmt.left),
                right: t1(stmt.right)
            }
            return mapper(new_stmt)
        }
        case "ObjectPattern" : {
            var new_stmt = {
                type: stmt.type,
                properties: stmt.properties.map(t1)
            }
            return mapper(new_stmt)
        }
        case "ArrayExpression" : {
            var new_stmt = {
                type: stmt.type,
                elements: stmt.elements.map(t1)
            }
            return mapper(new_stmt)
        }
        case "ObjectExpression" : {
            var new_stmt = {
                type: stmt.type,
                properties: stmt.properties.map(t1)
            }
            return mapper(new_stmt)
        }
        case "Property" : {
            var new_stmt = {
                type: stmt.type,
                key: t1(stmt.key),
                computed: stmt.computed,
                value: t1(stmt.value),
                kind: stmt.kind,
                method: stmt.method,
                shorthand: stmt.shorthand
            }
            return mapper(new_stmt)
        }
        case "FunctionExpression":
        case "FunctionDeclaration" : {
            var new_stmt = {
                type: stmt.type,
                id: t1(stmt.id),
                params: stmt.params.map(t1),
                body: t1(stmt.body),
                generator: stmt.generator,
                async: stmt.async,
                expression: stmt.expression
            }
            return mapper(new_stmt)
        }
        case "ArrowFunctionExpression": {
            var new_stmt = {
                type: stmt.type,
                id: t1(stmt.id),
                params: stmt.params.map(t1),
                body: t1(stmt.body),
                generator: stmt.generator,
                async: stmt.async,
                expression: stmt.expression
            }
            return mapper(new_stmt)
        }
        case "ClassExpression": {
            var new_stmt = {
                type: stmt.type,
                id: t1(stmt.id),
                superClass: t1(stmt.superClass),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "ClassBody": {
            var new_stmt = {
                type: stmt.type,                
                body: stmt.body.map(t1)
            }
            return mapper(new_stmt)
        }
        case "MethodDefinition" : {
            var new_stmt = {
                type: stmt.type,
                key: t1(stmt.key),
                computed: stmt.computed,
                value: t1(stmt.value),
                kind: stmt.kind,
                static: stmt.static
            }
            return mapper(new_stmt)
        }
        case "TaggedTemplateExpression" : {
            var new_stmt = {
                type: stmt.type,
                readonlytag: t1(stmt.readonlytag),
                readonlyquasi: t1(stmt.readonlyquasi)
            }
            return mapper(new_stmt)
        }
        case "TemplateElement" : {
            var new_stmt = {
                type: stmt.type,
                value: t1(stmt.value),
                tail: stmt.tail
            }
            return mapper(new_stmt)
        }
        case "TemplateLiteral" : {
            var new_stmt = {
                type: stmt.type,
                quasis: stmt.quasis.map(t1),
                expressions: stmt.expressions.map(t1)
            }
            return mapper(new_stmt)
        }
        case "MemberExpression" : {
            var new_stmt = {
                type: stmt.type,
                computed: stmt.computed,
                object: t1(stmt.object),
                property: t1(stmt.property)
            }
            return mapper(new_stmt)
        }
        case "MetaProperty" : {
            var new_stmt = {
                type: stmt.type,
                meta: t1(stmt.meta),
                property: t1(stmt.property)
            }
            return mapper(new_stmt)
        }
        case "CallExpression" : 
        case "NewExpression" : {
            var new_stmt = {
                type: stmt.type,
                callee: t1(stmt.callee),
                arguments: stmt.arguments.map(t1)
            }
            return mapper(new_stmt)
        }
        case "SpreadElement" : 
        case "AwaitExpression": {
            var new_stmt = {
                type: stmt.type,
                argument: t1(stmt.argument)
            }
            return mapper(new_stmt)
        }
        case "UpdateExpression":
        case "UnaryExpression": {
            var new_stmt = {
                type: stmt.type,
                operator: stmt.operator,
                argument: t1(stmt.argument),
                prefix: stmt.prefix
            }
            return mapper(new_stmt)
        }
        case "BinaryExpression":
        case "LogicalExpression":
        case "AssignmentExpression": {
            var new_stmt = {
                type: stmt.type,
                operator: stmt.operator,
                left: t1(stmt.left),
                right: t1(stmt.right)
            }
            return mapper(new_stmt)
        }
        case "ConditionalExpression": {
            var new_stmt = {
                type: stmt.type,
                test: t1(stmt.test),
                consequent: t1(stmt.consequent),
                alternate: t1(stmt.alternate)
            }
            return mapper(new_stmt)
        }
        case "YieldExpression": {
            var new_stmt = {
                type: stmt.type,
                argument: t1(stmt.argument),
                delegate: stmt.delegate
            }
            return mapper(new_stmt)
        }
        case "SequenceExpression": {
            var new_stmt = {
                type: stmt.type,
                expressions: stmt.expressions.map(t1)
            }
            return mapper(new_stmt)
        }
        case "BlockStatement":  {
            var new_stmt = {
                type: stmt.type,
                body: stmt.body.map(t1)
            }
            return mapper(new_stmt)
        }
        case "BreakStatement" :
        case "ContinueStatement": {
            var new_stmt = {
                type: stmt.type,
                label: t1(stmt.label)
            }
            return mapper(new_stmt)
        }
        case "ClassDeclaration": {
            var new_stmt = {
                type: stmt.type,
                id: t1(stmt.id),
                superClass: t1(stmt.superClass),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "DoWhileStatement": {
            var new_stmt = {
                type: stmt.type,
                body: t1(stmt.body),
                test: t1(stmt.test)
            }
            return mapper(new_stmt)
        }
        case "ExpressionStatement": {
            var new_stmt = {
                type: stmt.type,
                expression: t1(stmt.expression)
            }
            return mapper(new_stmt)
        }
        case "ForStatement": {
            var new_stmt = {
                type: stmt.type,
                init: t1(stmt.init),
                test: t1(stmt.test),
                update: t1(stmt.update),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "ForInStatement": {
            var new_stmt = {
                type: stmt.type,
                left: t1(stmt.left),
                right: t1(stmt.right),
                body: t1(stmt.body),
                each: stmt.each
            }
            return mapper(new_stmt)
        }
        case "ForOfStatement": {
            var new_stmt = {
                type: stmt.type,
                left: t1(stmt.left),
                right: t1(stmt.right),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "IfStatement": {
            var new_stmt = {
                type: stmt.type,
                test: t1(stmt.test),
                consequent: t1(stmt.consequent),
                alternate: t1(stmt.alternate)
            }
            return mapper(new_stmt)
        }        
        case "LabeledStatement": {
            var new_stmt = {
                type: stmt.type,
                label: t1(stmt.label),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "ReturnStatement" :
        case "ThrowStatement" : {
            var new_stmt = {
                type: stmt.type,
                argument: t1(stmt.argument)
            }
            return mapper(new_stmt)
        }
        case "SwitchStatement":{
            var new_stmt = {
                type: stmt.type,
                discriminant: t1(stmt.discriminant),
                cases: stmt.cases.map(t1)
            }
            return mapper(new_stmt)
        }
        case "SwitchCase":{
            var new_stmt = {
                type: stmt.type,
                test: t1(stmt.test),
                consequent: stmt.consequent.map(t1)
            }
            return mapper(new_stmt)
        }
        case "TryStatement":{
            var new_stmt = {
                type: stmt.type,
                block: t1(stmt.block),
                handler: t1(stmt.handler),
                finalizer: t1(stmt.finalizer)
            }
            return mapper(new_stmt)
        }
        case "CatchClause" : {
            var new_stmt = {
                type: stmt.type,
                params: t1(stmt.params),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "VariableDeclaration": {
            var new_stmt = {
                type: stmt.type,
                declarations: stmt.declarations.map(t1),
                kind: stmt.kind
            }
            return mapper(new_stmt)
        }
        case "VariableDeclarator" : {
            var new_stmt = {
                type: stmt.type,
                id: t1(stmt.id),
                init: t1(stmt.init)
            }
            return mapper(new_stmt)
        }
        case "WhileStatement": {
            var new_stmt = {
                type: stmt.type,
                test: t1(stmt.test),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "WithStatement":{
            var new_stmt = {
                type: stmt.type,
                object: t1(stmt.object),
                body: t1(stmt.body)
            }
            return mapper(new_stmt)
        }
        case "Identifier" : 
        case "Literal" :
            return mapper(stmt)
        
    }
}

function replace3with4(stmt){
    function mapper(stmt){
        switch(stmt.type) {
            case "Literal":{
                if (stmt.value === 3){
                    var new_stmt = {
                        type: stmt.type,
                        value: 4,
                        raw: "4",
                        regex: stmt.regex
                    }
                    return new_stmt
                } 
                else return stmt
            }
            default: return stmt
        }
    }

    return map(mapper, stmt)
}

function replaceVarXwithY(stmt){
    function mapper2(stmt){
        if (stmt.type === "FunctionDeclaration"){
            stmt.id.is_func_dec = true;
        }
        return stmt
            
    }

    function mapper(stmt){
        switch(stmt.type) {
            case "Identifier": {
                if (stmt.name === "x" && !stmt.is_func_dec){
                    var new_id = {
                        type: stmt.type,
                        name: "y"
                    }
                    return new_id
                }
                else return stmt
            }
            default: return stmt
        }
    }
    var new_stmt = map(mapper2, stmt)
    return map(mapper, new_stmt)
}

function replaceFuncXwithY(stmt){
    function mapper(stmt){
        switch(stmt.type) {
            case "FunctionDeclaration":{
                if (stmt.id.name === 'x'){
                    var new_id = {
                        type: stmt.id.type,
                        name: 'y'
                    }
                    var new_stmt = {
                        type: stmt.type,
                        id: new_id,
                        params: stmt.params,
                        body: stmt.body,
                        generator: stmt.generator,
                        async: stmt.async,
                        expression: stmt.expression
                        
                    }
                    return new_stmt
                } 
                else return stmt
            }
            case "CallExpression" : {
                if (stmt.callee.name === 'x'){
                    var new_callee = {
                        type: stmt.callee.type,
                        name: 'y'
                    }
                    var new_stmt = {
                        type: stmt.type,
                        callee: new_callee,
                        arguments: stmt.arguments                        
                        
                    }
                    return new_stmt
                } 
                else return stmt
            }
            default: return stmt
        }
    }

    return map(mapper, stmt)
}

function replaceVarObject(stmt, object){
    function mapper2(stmt){
        if (stmt.type === "FunctionDeclaration"){
            stmt.id.is_func_dec = true;
        }
        return stmt   
    }

    function mapper(stmt){
        keys = Object.keys(object)
        switch(stmt.type) {
            case "Identifier": {
                for(var i = 0; i < keys.length; i++){
                    if (stmt.name === keys[i] && !stmt.is_func_dec){
                        var new_id = {
                            type: stmt.type,
                            name: object[keys[i]]
                        }
                        return new_id
                    }
                    else return stmt
                }
            }
            default: return stmt
        }
    }
    var new_stmt = map(mapper2, stmt)
    return map(mapper, new_stmt)
}

function switchDivider(stmt){
    function mapper(stmt){
        switch(stmt.type){
            case "SwitchStatement":{
                var casesA= [], casesB=[], def
                for (var i=0; i < stmt.cases.length; i++) {
                    if (!def && stmt.cases[i].test !==null){
                        casesA.push(stmt.cases[i])
                    }
                    else if (stmt.cases[i].test === null){
                        def=stmt.cases[i]
                    }
                    else{
                        casesB.push(stmt.cases[i])
                    }
                }
                var new_stmt = {
                    type: stmt.type,
                    discriminant: stmt.discriminant,
                    cases_A: casesA,
                    default: def,
                    cases_B: casesB
                }
                return new_stmt 
            }
            default: return stmt

        }
    }


    return map(mapper, stmt)
}

/*
var fileToAnalyse = process.argv[2];

var program_text = readFileContent(fileToAnalyse)

var program = p(program_text);

const option = {
    format : {
        quotes : 'single',
        indent : {
            style : '\t'
        }
    }
}; 

var obj = {
    x: 'y',
    i:'n'
}

//var new_program = replace3with4(program)
//var new_program = replaceVarXwithY(program)
//var new_program = replaceFuncXwithY(program)
//var new_program = replaceVarObject(program, obj)
var new_program = switchDivider(program)

console.log(g(new_program, option))
*/
module.exports = map
