const GLConfig = {
    CO : { type: 'REQUIRED'},
    MAJ: { type: 'NORMAL'},
    SET: { type: 'NORMAL'},
    MIN: { type: 'REQUIRED'}
  }

  const GLSegments = {
    CO : '01',
    MAJ: '111',
    SET: '111',
    MIN: '000'
  }

const validateGL = (GLConfig, GLSegments) => {
    //console.log(GLConfig.CO.type);
    let newArr = []
    for (const key in GLConfig) {
        if(GLConfig[key].type === 'REQUIRED'){
            newArr.push(key)
        }
    }
    for (const key of newArr) {
        if (GLSegments[key].length > key.length || GLSegments[key] === '' || GLSegments[key] === undefined) {
            return false;
        }
    }
    return true
    // newArr.forEach(val=>{
    //     for (const key in GLSegments) {
    //         if(val === key){
    //             if(GLSegments[key].type.length < val.length){
    //                 return false
    //             }
    //         }
    //     }
    //     return true
    // })
}

let res = validateGL(GLConfig, GLSegments)
res ? console.log("validation passed") : console.log("validation failed");