// Generated from Codi.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\b1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003\u0013\n\u0003\r\u0003",
    "\u000e\u0003\u0014\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0006\u0007.\n\u0007\r\u0007\u000e\u0007/\u0002\u0002\b\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0004",
    "\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u00022\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u000f\u0003",
    "\u0002\u0002\u0002\u0005\u0012\u0003\u0002\u0002\u0002\u0007\u0016\u0003",
    "\u0002\u0002\u0002\t\u001e\u0003\u0002\u0002\u0002\u000b\'\u0003\u0002",
    "\u0002\u0002\r-\u0003\u0002\u0002\u0002\u000f\u0010\u0007\"\u0002\u0002",
    "\u0010\u0004\u0003\u0002\u0002\u0002\u0011\u0013\t\u0002\u0002\u0002",
    "\u0012\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002",
    "\u0015\u0006\u0003\u0002\u0002\u0002\u0016\u0017\u0007f\u0002\u0002",
    "\u0017\u0018\u0007k\u0002\u0002\u0018\u0019\u0007t\u0002\u0002\u0019",
    "\u001a\u0007g\u0002\u0002\u001a\u001b\u0007k\u0002\u0002\u001b\u001c",
    "\u0007v\u0002\u0002\u001c\u001d\u0007c\u0002\u0002\u001d\b\u0003\u0002",
    "\u0002\u0002\u001e\u001f\u0007g\u0002\u0002\u001f \u0007u\u0002\u0002",
    " !\u0007s\u0002\u0002!\"\u0007w\u0002\u0002\"#\u0007g\u0002\u0002#$",
    "\u0007t\u0002\u0002$%\u0007f\u0002\u0002%&\u0007c\u0002\u0002&\n\u0003",
    "\u0002\u0002\u0002\'(\u0007r\u0002\u0002()\u0007w\u0002\u0002)*\u0007",
    "n\u0002\u0002*+\u0007c\u0002\u0002+\f\u0003\u0002\u0002\u0002,.\t\u0003",
    "\u0002\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u000e\u0003\u0002\u0002",
    "\u0002\u0005\u0002\u0014/\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function (ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CodiLexer(input) {
    antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CodiLexer.prototype = Object.create(antlr4.Lexer.prototype);
CodiLexer.prototype.constructor = CodiLexer;

Object.defineProperty(CodiLexer.prototype, "atn", {
    get: function () {
        return atn;
    }
});

CodiLexer.EOF = antlr4.Token.EOF;
CodiLexer.T__0 = 1;
CodiLexer.NEWLINE = 2;
CodiLexer.MOVE_DIREITA = 3;
CodiLexer.MOVE_ESQUERDA = 4;
CodiLexer.PULA = 5;
CodiLexer.INT = 6;

CodiLexer.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

CodiLexer.prototype.modeNames = ["DEFAULT_MODE"];

CodiLexer.prototype.literalNames = [null, "' '", null, "'direita'", "'esquerda'",
    "'pula'"];

CodiLexer.prototype.symbolicNames = [null, null, "NEWLINE", "MOVE_DIREITA",
    "MOVE_ESQUERDA", "PULA", "INT"];

CodiLexer.prototype.ruleNames = ["T__0", "NEWLINE", "MOVE_DIREITA", "MOVE_ESQUERDA",
    "PULA", "INT"];

CodiLexer.prototype.grammarFileName = "Codi.g4";



exports.CodiLexer = CodiLexer;

