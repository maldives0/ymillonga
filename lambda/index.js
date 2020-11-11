const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
    const Bucket = event.Records[0].s3.bucket.name;//react-nodebird-s3
    const key = decodeURIComponent(event.Records[0].s3.object.key);//original/1234345_abc.png
    console.log(Bucket, key);
    const filename = Key.split('/')[Key.split('/').length - 1];//1234345_abc.png
    const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();//png
    const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;
    console.log('filename', filename, 'ext', ext);

    try {
        const s3Object = await s3.getObject({ Bucket, key }).promise();
        console.log('original', s3Object.Body.length);
        const resizedImage = await sharp(s3Object.Body)
            .resize(400, 400, { fit: 'inside' })
            .toFormat(requiredFormat)
            .toBuffer();
        await s3.putObject({
            Bucket,
            key: `thumb/${filename}`,
            Body: resizedImage,
        }).promise();
        console.log('put', resizedImage.length);
        return callback(null, `thumb/${filename}`);
    }
    catch (error) {
        console.error(error);
        return callback(error);

    }
};