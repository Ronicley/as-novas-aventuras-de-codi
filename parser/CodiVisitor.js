// Generated from Codi.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CodiParser.

function CodiVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CodiVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CodiVisitor.prototype.constructor = CodiVisitor;

// Visit a parse tree produced by CodiParser#programa.
CodiVisitor.prototype.visitPrograma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodiParser#linha.
CodiVisitor.prototype.visitLinha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodiParser#comando.
CodiVisitor.prototype.visitComando = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodiParser#parametro.
CodiVisitor.prototype.visitParametro = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CodiVisitor = CodiVisitor;