const getUrlExtension = (url) => {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  };
  
  const getFilename = (url) => {
    // const  filename = url.substr( url.lastIndexOf("/") + 1);
    return url.split("/").pop();
  };
  
  export const imageUrlToFile = async (imgUrl : string) => {
    // var imgExt = getUrlExtension(imgUrl);
  
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], getFilename(imgUrl), {
      type: blob.type,
    });
    return file;
  };
  