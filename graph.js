const authProvider = {
    getAccessToken: async () => {
        return await getToken();
    }
};

const graphClient = MicrosoftGraph.Client.initWithMiddleware({ authProvider });

async function getUser() {
    ensureScope('user.read');
    return await graphClient
        .api('/me')
        .select('id,displayName')
        .get();
}
async function getCity() {
    ensureScope('user.readbasic.all');
    return await graphClient
        .api('/me/?$select=displayName,city')
        .select('city')
        .get();s
}
