 require.config({
             paths: {
                //  ScrollMagic: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min',
                //  debug: 'js/res/debug.addIndicators',
                 vue: './js/vue',
                 jquery: './js/jquery-1.8.1',
                 loadash: './lodash',
                 lhgdialog: './lhgdialog',
                 'ueditor.config': './js/ueditor.config',
                 'ueditor': './js/ueditor.all'
                //  ScrollMagicJquery: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/jquery.ScrollMagic.min',
                //  TweenLite: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenLite.min',
                //  TweenMax: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min',
                //  TimelineMax: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TimelineMax.min',
                //  ScrollMagicGSAP: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min',
             },
             shim: {
                 'ueditor': {
                     deps:['ueditor.config']
                 }
             }
});