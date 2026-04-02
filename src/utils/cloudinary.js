// utils/cloudinary.js
export function getCloudinaryUrl(file, options = {}) {
    if (!file) return "";
  
    const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  
    const defaultOptions = {
      type: "image", // ou 'video'
      format: "auto",
      quality: "auto",
      width: 100,
    };
  
    const finalOptions = { ...defaultOptions, ...options };
    const transformation = `f_${finalOptions.format},q_${finalOptions.quality},w_${finalOptions.width}`;
  
    return `https://res.cloudinary.com/${CLOUD_NAME}/${finalOptions.type}/upload/${transformation}/${file}`;
  }
  