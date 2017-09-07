var gulp = require('gulp');
var server = require('gulp-webserver');
var urlTool = require('url')
var qs = require('qs');
var data=require('../data/data.json');
gulp.task('mockServer',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8989,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*')

                var urlObj =  urlTool.parse(req.url);

                var method = req.method;

                var pathname = urlObj.pathname;
                if(method==="POST"){

                    var postData = '';

                    req.on('data',function(chunk){

                        postData +=chunk;

                    })
                    req.on('end',function(){
                        var postParmas = qs.parse(postData)

                        switch(pathname){
                            case '/taobao':
                            res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(data))
                            res.end()
                            break;
                            default : 
                        }

                        res.end()
                    })

                    
                }

            }
        }))
})


gulp.task('default',['mockServer'])