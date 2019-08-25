import { config } from 'dotenv'
config()

import path from 'path'
import cloudinary from 'cloudinary'

const imageToUpload = path.join(__dirname, 'whateva.jpg')

const imageToUploadAndEager = path.join(__dirname, 'whateva2.jpg')

const eagerOptions = {
  width: 200,
  height: 150,
  crop: 'scale',
  format: 'jpg',
}

const uploadImageToCloudinary = async (imageFile, eagerOptions = {}) => {
  try {
    const res = await cloudinary.v2.uploader.upload(imageFile, {
      tags: 'basic_example',
      use_filename: true,
      unique_filename: false,
      overwrite: false,
      eager: eagerOptions,
    })

    const { eager } = res

    console.log({ eager })

    if (res.existing) return console.log('Archivo ya creado')
  } catch (error) {
    console.log({ error })
  }
}

// uploadImageToCloudinary(imageToUpload)
uploadImageToCloudinary(imageToUploadAndEager, eagerOptions)
