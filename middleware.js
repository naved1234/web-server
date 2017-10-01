module.exports=
{
  requireAuthentication:function(req,res,next)
  {
    console.log('private route hit');
    next();
  },
  logger:function(req,res,next)
  {
    console.log('Request: '+req.method+', Date: '+new Date().toString()
    +', Url: '+' '+req.originalUrl);
    next();
  }
};
