/**
 * Created by sagar on 31/3/14.
 */
define(['dojo/request','dojo/promise/all', 'dojo/ready'],
    function(request,all,ready){
        ready(function(){
            all([
                request('data1.json'),
                request('data2.json')
            ]).then(function(results){
                var i,l;
                for(i=0, l=results.length;i<l;++i){
                    console.log("data ",i, results[i]);
                }
            });
        });
    }
);