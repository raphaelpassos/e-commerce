function define(module) {
module.exports = {
    async Header() {
        
        return [
            {        
                //mathing all API routes
                source: '/:path*',
                headers: [
                    {key: 'Access-Control-Credentials', value: 'true'},
                    {key: 'Access-Control-Allow-Origin', value: '*'},
                    {key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS, PATCH, DELETE, POST, PUT '},
                    {key: 'Access-Control-Allow-Headers', value:  'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'}
                    
                ]
            }
        ]
    }
}
};

