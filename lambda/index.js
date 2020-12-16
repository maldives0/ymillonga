const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    const Bucket = event.Records[0].s3.bucket.name;//ymillonga-s3
    const key = decodeURIComponent(event.Records[0].s3.object.key);//original/1234345_abc.png 한글이름 가능
    console.log(Bucket, key);
    const filename = Key.split('/')[Key.split('/').length - 1];//1234345_abc.png
    const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();//png 대문자 가능
    const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;
    console.log('filename', filename, 'ext', ext);

    try {
        const s3Object = await s3.getObject({ Bucket, key }).promise();
        console.log('original', s3Object.Body.length);//이미지 길이 확인
        const resizedImage = await sharp(s3Object.Body)
            .resize(400, 400, { fit: 'inside' })//가로 세로 400
            .toFormat(requiredFormat)
            .toBuffer();
        await s3.putObject({
            Bucket,
            key: `thumbnail/${filename}`,
            Body: resizedImage,
        }).promise();
        console.log('put', resizedImage.length);
        return callback(null, `thumbnail/${filename}`);
    }
    catch (error) {
        console.error(error);
        return callback(error);

    }
};