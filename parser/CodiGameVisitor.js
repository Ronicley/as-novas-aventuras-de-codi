var antlr4 = require('../antlr4/index');
var CodiLexer = require('../parser/CodiLexer');
var CodiParser = require('../parser/CodiParser');
var CodiVisitor = require('../parser/CodiVisitor').CodiVisitor;

CodiGameVisitor = function (game, player) {
    CodiVisitor.call(this);
    this.game = game;
    this.player = player;
    return this;
}

CodiGameVisitor.prototype = Object.create(CodiVisitor.prototype);

CodiGameVisitor.prototype.constructor = CodiGameVisitor;

CodiGameVisitor.prototype.visitPrograma = function (ctx) {
    // console.debug('visitPrograma', ctx.getText());
    return this.visitChildren(ctx);
    // return null;
}

CodiGameVisitor.prototype.visitLinha = function (ctx) {
    // console.debug('visitLinha', ctx.getText());
    // console.debug('children', ctx.children);
    var comando = ctx.children[0].getText();
    var parametro = ctx.children[2].getText();
    addComando(comando, parametro);
    // this.player.x += 50;
    // console.debug({comando, parametro});
    // return this.visitChildren(ctx);
    return null;
};

// KoderGameVisitor.prototype.visitComando = function (ctx) {
//     console.debug('visitComando', ctx.getText());
//     if (ctx.children.length > 0) {
//         console.debug(ctx.children[0]);
//     }
//     console.debug('visitChildren', this.visitChildren(ctx));
//     return null;
//     //return this.visitChildren(ctx);
// };

// KoderGameVisitor.prototype.visitParametro = function (ctx) {
//     console.debug('visitParametro', ctx.getText());
//     return parseInt(ctx.getText());
// };



exports.CodiGameVisitor = CodiGameVisitor;