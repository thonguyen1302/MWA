function slow(callback) {
  setTimeout(()=>{
      for(let i=0; i<=5e8; i++){}
  },0); 
  if(Math.random() > 0.5) {
    return callback("Error", null);
  }
  return callback(null, {id:12345})
}

function exec(fn) {
  //
}

exec(slow).done(function(data){console.log(data);})

