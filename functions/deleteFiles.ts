// deleteFiles 删除云储存文件
// SDK: http://docs.minio.org.cn/docs/master/javascript-client-api-reference#removeObject
import cloud from '@lafjs/cloud'
const Minio = require('minio')

function getFilePath(fullPath: string) {
  // 形如：`https://${OSS_ENDPOINT}:${OSS_PORT}/${OSS_BUCKET}/`
  return fullPath.split('/').slice(4).join("/");
}

exports.main = async function (ctx: FunctionContext) {
  // body, query 为请求参数, user 是授权对象
  const { body, query } = ctx
  if (body && body.deploy_test === true) {
    // 进行部署检查
    return "v1.0";
  }
  
  const { OSS_ENDPOINT, OSS_PORT, OSS_BUCKET, OSS_SECRET_ID, OSS_SECRET_KEY } = await cloud.invoke("getAppSecret", {});

  const fileIDs = ctx.body.fileIDs;
  
  const client = new Minio.Client({
    bucketName: OSS_BUCKET,
    endPoint: OSS_ENDPOINT,
    port: OSS_PORT,
    useSSL: true,
    accessKey: OSS_SECRET_ID,
    secretKey: OSS_SECRET_KEY,
  });
  for (var idx in fileIDs) {
    const fileName = getFilePath(fileIDs[idx]);
    await client.removeObject(OSS_BUCKET, fileName, function (err) {
      if (err) {
        console.log('Unable to remove object', err);
      }
    });
    console.log(`Removed the object ${fileName} from bucket ${OSS_BUCKET}`);
  }
}