

//Private Server configurations
export var config:any =
{

//Private server information
    BATCH_SERVERS_API_BASE : "http://bento.batch-servers.miovp.com",
    BATCH_SERVERS_REFRESH_INTERVAL : 10,

//Gearman
    "GEARMAN_API_BASE" : "http://bento.miovp.com/gearman",
    GEARMAN_REFRESH_INTERVAL : 3, //in seconds

//SUPERVISOR
    SUPERVISOR_API_BASE : "http://bento.miovp.com/supervisor",
    SUPERVISOR_REFRESH_INTERVAL : 3, //in seconds

    REQUEST_TIMEOUT : 120, //in seconds
    TOAST_MESSAGE_TIMEOUT: 5


};