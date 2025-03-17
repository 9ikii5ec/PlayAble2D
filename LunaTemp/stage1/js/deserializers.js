var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i218 = root || request.c( 'UnityEngine.JointSpring' )
  var i219 = data
  i218.spring = i219[0]
  i218.damper = i219[1]
  i218.targetPosition = i219[2]
  return i218
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i220 = root || request.c( 'UnityEngine.JointMotor' )
  var i221 = data
  i220.m_TargetVelocity = i221[0]
  i220.m_Force = i221[1]
  i220.m_FreeSpin = i221[2]
  return i220
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i222 = root || request.c( 'UnityEngine.JointLimits' )
  var i223 = data
  i222.m_Min = i223[0]
  i222.m_Max = i223[1]
  i222.m_Bounciness = i223[2]
  i222.m_BounceMinVelocity = i223[3]
  i222.m_ContactDistance = i223[4]
  i222.minBounce = i223[5]
  i222.maxBounce = i223[6]
  return i222
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i224 = root || request.c( 'UnityEngine.JointDrive' )
  var i225 = data
  i224.m_PositionSpring = i225[0]
  i224.m_PositionDamper = i225[1]
  i224.m_MaximumForce = i225[2]
  i224.m_UseAcceleration = i225[3]
  return i224
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i226 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i227 = data
  i226.m_Spring = i227[0]
  i226.m_Damper = i227[1]
  return i226
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i228 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i229 = data
  i228.m_Limit = i229[0]
  i228.m_Bounciness = i229[1]
  i228.m_ContactDistance = i229[2]
  return i228
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i230 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i231 = data
  i230.m_ExtremumSlip = i231[0]
  i230.m_ExtremumValue = i231[1]
  i230.m_AsymptoteSlip = i231[2]
  i230.m_AsymptoteValue = i231[3]
  i230.m_Stiffness = i231[4]
  return i230
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i232 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i233 = data
  i232.m_LowerAngle = i233[0]
  i232.m_UpperAngle = i233[1]
  return i232
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i234 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i235 = data
  i234.m_MotorSpeed = i235[0]
  i234.m_MaximumMotorTorque = i235[1]
  return i234
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i236 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i237 = data
  i236.m_DampingRatio = i237[0]
  i236.m_Frequency = i237[1]
  i236.m_Angle = i237[2]
  return i236
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i239 = data
  i238.m_LowerTranslation = i239[0]
  i238.m_UpperTranslation = i239[1]
  return i238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i240 = root || new pc.UnityMaterial()
  var i241 = data
  i240.name = i241[0]
  request.r(i241[1], i241[2], 0, i240, 'shader')
  i240.renderQueue = i241[3]
  i240.enableInstancing = !!i241[4]
  var i243 = i241[5]
  var i242 = []
  for(var i = 0; i < i243.length; i += 1) {
    i242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i243[i + 0]) );
  }
  i240.floatParameters = i242
  var i245 = i241[6]
  var i244 = []
  for(var i = 0; i < i245.length; i += 1) {
    i244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i245[i + 0]) );
  }
  i240.colorParameters = i244
  var i247 = i241[7]
  var i246 = []
  for(var i = 0; i < i247.length; i += 1) {
    i246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i247[i + 0]) );
  }
  i240.vectorParameters = i246
  var i249 = i241[8]
  var i248 = []
  for(var i = 0; i < i249.length; i += 1) {
    i248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i249[i + 0]) );
  }
  i240.textureParameters = i248
  var i251 = i241[9]
  var i250 = []
  for(var i = 0; i < i251.length; i += 1) {
    i250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i251[i + 0]) );
  }
  i240.materialFlags = i250
  return i240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i255 = data
  i254.name = i255[0]
  i254.value = i255[1]
  return i254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i259 = data
  i258.name = i259[0]
  i258.value = new pc.Color(i259[1], i259[2], i259[3], i259[4])
  return i258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i263 = data
  i262.name = i263[0]
  i262.value = new pc.Vec4( i263[1], i263[2], i263[3], i263[4] )
  return i262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i267 = data
  i266.name = i267[0]
  request.r(i267[1], i267[2], 0, i266, 'value')
  return i266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i271 = data
  i270.name = i271[0]
  i270.enabled = !!i271[1]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i273 = data
  i272.name = i273[0]
  i272.width = i273[1]
  i272.height = i273[2]
  i272.mipmapCount = i273[3]
  i272.anisoLevel = i273[4]
  i272.filterMode = i273[5]
  i272.hdr = !!i273[6]
  i272.format = i273[7]
  i272.wrapMode = i273[8]
  i272.alphaIsTransparency = !!i273[9]
  i272.alphaSource = i273[10]
  i272.graphicsFormat = i273[11]
  i272.sRGBTexture = !!i273[12]
  i272.desiredColorSpace = i273[13]
  i272.wrapU = i273[14]
  i272.wrapV = i273[15]
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i275 = data
  i274.position = new pc.Vec3( i275[0], i275[1], i275[2] )
  i274.scale = new pc.Vec3( i275[3], i275[4], i275[5] )
  i274.rotation = new pc.Quat(i275[6], i275[7], i275[8], i275[9])
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i277 = data
  i276.enabled = !!i277[0]
  request.r(i277[1], i277[2], 0, i276, 'sharedMaterial')
  var i279 = i277[3]
  var i278 = []
  for(var i = 0; i < i279.length; i += 2) {
  request.r(i279[i + 0], i279[i + 1], 2, i278, '')
  }
  i276.sharedMaterials = i278
  i276.receiveShadows = !!i277[4]
  i276.shadowCastingMode = i277[5]
  i276.sortingLayerID = i277[6]
  i276.sortingOrder = i277[7]
  i276.lightmapIndex = i277[8]
  i276.lightmapSceneIndex = i277[9]
  i276.lightmapScaleOffset = new pc.Vec4( i277[10], i277[11], i277[12], i277[13] )
  i276.lightProbeUsage = i277[14]
  i276.reflectionProbeUsage = i277[15]
  i276.color = new pc.Color(i277[16], i277[17], i277[18], i277[19])
  request.r(i277[20], i277[21], 0, i276, 'sprite')
  i276.flipX = !!i277[22]
  i276.flipY = !!i277[23]
  i276.drawMode = i277[24]
  i276.size = new pc.Vec2( i277[25], i277[26] )
  i276.tileMode = i277[27]
  i276.adaptiveModeThreshold = i277[28]
  i276.maskInteraction = i277[29]
  i276.spriteSortPoint = i277[30]
  return i276
}

Deserializers["Build"] = function (request, data, root) {
  var i282 = root || request.c( 'Build' )
  var i283 = data
  request.r(i283[0], i283[1], 0, i282, 'buildGrid')
  request.r(i283[2], i283[3], 0, i282, 'buildPrefab')
  i282.snapSpeed = i283[4]
  i282.mergeSpeed = i283[5]
  i282.buildingLevel = i283[6]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i285 = data
  i284.radius = i285[0]
  i284.enabled = !!i285[1]
  i284.isTrigger = !!i285[2]
  i284.usedByEffector = !!i285[3]
  i284.density = i285[4]
  i284.offset = new pc.Vec2( i285[5], i285[6] )
  request.r(i285[7], i285[8], 0, i284, 'material')
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i287 = data
  i286.name = i287[0]
  i286.tagId = i287[1]
  i286.enabled = !!i287[2]
  i286.isStatic = !!i287[3]
  i286.layer = i287[4]
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i289 = data
  i288.name = i289[0]
  i288.index = i289[1]
  i288.startup = !!i289[2]
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i291 = data
  i290.enabled = !!i291[0]
  i290.aspect = i291[1]
  i290.orthographic = !!i291[2]
  i290.orthographicSize = i291[3]
  i290.backgroundColor = new pc.Color(i291[4], i291[5], i291[6], i291[7])
  i290.nearClipPlane = i291[8]
  i290.farClipPlane = i291[9]
  i290.fieldOfView = i291[10]
  i290.depth = i291[11]
  i290.clearFlags = i291[12]
  i290.cullingMask = i291[13]
  i290.rect = i291[14]
  request.r(i291[15], i291[16], 0, i290, 'targetTexture')
  i290.usePhysicalProperties = !!i291[17]
  i290.focalLength = i291[18]
  i290.sensorSize = new pc.Vec2( i291[19], i291[20] )
  i290.lensShift = new pc.Vec2( i291[21], i291[22] )
  i290.gateFit = i291[23]
  i290.commandBufferCount = i291[24]
  i290.cameraType = i291[25]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i293 = data
  i292.pivot = new pc.Vec2( i293[0], i293[1] )
  i292.anchorMin = new pc.Vec2( i293[2], i293[3] )
  i292.anchorMax = new pc.Vec2( i293[4], i293[5] )
  i292.sizeDelta = new pc.Vec2( i293[6], i293[7] )
  i292.anchoredPosition3D = new pc.Vec3( i293[8], i293[9], i293[10] )
  i292.rotation = new pc.Quat(i293[11], i293[12], i293[13], i293[14])
  i292.scale = new pc.Vec3( i293[15], i293[16], i293[17] )
  return i292
}

Deserializers["BuildGrid"] = function (request, data, root) {
  var i294 = root || request.c( 'BuildGrid' )
  var i295 = data
  var i297 = i295[0]
  var i296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i297.length; i += 2) {
  request.r(i297[i + 0], i297[i + 1], 1, i296, '')
  }
  i294.cells = i296
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i301 = data
  i300.ambientIntensity = i301[0]
  i300.reflectionIntensity = i301[1]
  i300.ambientMode = i301[2]
  i300.ambientLight = new pc.Color(i301[3], i301[4], i301[5], i301[6])
  i300.ambientSkyColor = new pc.Color(i301[7], i301[8], i301[9], i301[10])
  i300.ambientGroundColor = new pc.Color(i301[11], i301[12], i301[13], i301[14])
  i300.ambientEquatorColor = new pc.Color(i301[15], i301[16], i301[17], i301[18])
  i300.fogColor = new pc.Color(i301[19], i301[20], i301[21], i301[22])
  i300.fogEndDistance = i301[23]
  i300.fogStartDistance = i301[24]
  i300.fogDensity = i301[25]
  i300.fog = !!i301[26]
  request.r(i301[27], i301[28], 0, i300, 'skybox')
  i300.fogMode = i301[29]
  var i303 = i301[30]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i303[i + 0]) );
  }
  i300.lightmaps = i302
  i300.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i301[31], i300.lightProbes)
  i300.lightmapsMode = i301[32]
  i300.mixedBakeMode = i301[33]
  i300.environmentLightingMode = i301[34]
  i300.ambientProbe = new pc.SphericalHarmonicsL2(i301[35])
  i300.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i301[36])
  i300.useReferenceAmbientProbe = !!i301[37]
  request.r(i301[38], i301[39], 0, i300, 'customReflection')
  request.r(i301[40], i301[41], 0, i300, 'defaultReflection')
  i300.defaultReflectionMode = i301[42]
  i300.defaultReflectionResolution = i301[43]
  i300.sunLightObjectId = i301[44]
  i300.pixelLightCount = i301[45]
  i300.defaultReflectionHDR = !!i301[46]
  i300.hasLightDataAsset = !!i301[47]
  i300.hasManualGenerate = !!i301[48]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i307 = data
  request.r(i307[0], i307[1], 0, i306, 'lightmapColor')
  request.r(i307[2], i307[3], 0, i306, 'lightmapDirection')
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i308 = root || new UnityEngine.LightProbes()
  var i309 = data
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i317 = data
  var i319 = i317[0]
  var i318 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i319.length; i += 1) {
    i318.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i319[i + 0]));
  }
  i316.ShaderCompilationErrors = i318
  i316.name = i317[1]
  i316.guid = i317[2]
  var i321 = i317[3]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( i321[i + 0] );
  }
  i316.shaderDefinedKeywords = i320
  var i323 = i317[4]
  var i322 = []
  for(var i = 0; i < i323.length; i += 1) {
    i322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i323[i + 0]) );
  }
  i316.passes = i322
  var i325 = i317[5]
  var i324 = []
  for(var i = 0; i < i325.length; i += 1) {
    i324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i325[i + 0]) );
  }
  i316.usePasses = i324
  var i327 = i317[6]
  var i326 = []
  for(var i = 0; i < i327.length; i += 1) {
    i326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i327[i + 0]) );
  }
  i316.defaultParameterValues = i326
  request.r(i317[7], i317[8], 0, i316, 'unityFallbackShader')
  i316.readDepth = !!i317[9]
  i316.isCreatedByShaderGraph = !!i317[10]
  i316.compiled = !!i317[11]
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i331 = data
  i330.shaderName = i331[0]
  i330.errorMessage = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i336 = root || new pc.UnityShaderPass()
  var i337 = data
  i336.id = i337[0]
  i336.subShaderIndex = i337[1]
  i336.name = i337[2]
  i336.passType = i337[3]
  i336.grabPassTextureName = i337[4]
  i336.usePass = !!i337[5]
  i336.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[6], i336.zTest)
  i336.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[7], i336.zWrite)
  i336.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[8], i336.culling)
  i336.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i337[9], i336.blending)
  i336.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i337[10], i336.alphaBlending)
  i336.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[11], i336.colorWriteMask)
  i336.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[12], i336.offsetUnits)
  i336.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[13], i336.offsetFactor)
  i336.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[14], i336.stencilRef)
  i336.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[15], i336.stencilReadMask)
  i336.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i337[16], i336.stencilWriteMask)
  i336.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i337[17], i336.stencilOp)
  i336.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i337[18], i336.stencilOpFront)
  i336.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i337[19], i336.stencilOpBack)
  var i339 = i337[20]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i339[i + 0]) );
  }
  i336.tags = i338
  var i341 = i337[21]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( i341[i + 0] );
  }
  i336.passDefinedKeywords = i340
  var i343 = i337[22]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i343[i + 0]) );
  }
  i336.passDefinedKeywordGroups = i342
  var i345 = i337[23]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i345[i + 0]) );
  }
  i336.variants = i344
  var i347 = i337[24]
  var i346 = []
  for(var i = 0; i < i347.length; i += 1) {
    i346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i347[i + 0]) );
  }
  i336.excludedVariants = i346
  i336.hasDepthReader = !!i337[25]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i349 = data
  i348.val = i349[0]
  i348.name = i349[1]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i351 = data
  i350.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i351[0], i350.src)
  i350.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i351[1], i350.dst)
  i350.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i351[2], i350.op)
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i353 = data
  i352.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i353[0], i352.pass)
  i352.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i353[1], i352.fail)
  i352.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i353[2], i352.zFail)
  i352.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i353[3], i352.comp)
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i357 = data
  i356.name = i357[0]
  i356.value = i357[1]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i361 = data
  var i363 = i361[0]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( i363[i + 0] );
  }
  i360.keywords = i362
  i360.hasDiscard = !!i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i367 = data
  i366.passId = i367[0]
  i366.subShaderIndex = i367[1]
  var i369 = i367[2]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( i369[i + 0] );
  }
  i366.keywords = i368
  i366.vertexProgram = i367[3]
  i366.fragmentProgram = i367[4]
  i366.exportedForWebGl2 = !!i367[5]
  i366.readDepth = !!i367[6]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i373 = data
  request.r(i373[0], i373[1], 0, i372, 'shader')
  i372.pass = i373[2]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i377 = data
  i376.name = i377[0]
  i376.type = i377[1]
  i376.value = new pc.Vec4( i377[2], i377[3], i377[4], i377[5] )
  i376.textureValue = i377[6]
  i376.shaderPropertyFlag = i377[7]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i379 = data
  i378.name = i379[0]
  request.r(i379[1], i379[2], 0, i378, 'texture')
  i378.aabb = i379[3]
  i378.vertices = i379[4]
  i378.triangles = i379[5]
  i378.textureRect = UnityEngine.Rect.MinMaxRect(i379[6], i379[7], i379[8], i379[9])
  i378.packedRect = UnityEngine.Rect.MinMaxRect(i379[10], i379[11], i379[12], i379[13])
  i378.border = new pc.Vec4( i379[14], i379[15], i379[16], i379[17] )
  i378.transparency = i379[18]
  i378.bounds = i379[19]
  i378.pixelsPerUnit = i379[20]
  i378.textureWidth = i379[21]
  i378.textureHeight = i379[22]
  i378.nativeSize = new pc.Vec2( i379[23], i379[24] )
  i378.pivot = new pc.Vec2( i379[25], i379[26] )
  i378.textureRectOffset = new pc.Vec2( i379[27], i379[28] )
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i381 = data
  var i383 = i381[0]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i383[i + 0]) );
  }
  i380.files = i382
  i380.componentToPrefabIds = i381[1]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i387 = data
  i386.path = i387[0]
  request.r(i387[1], i387[2], 0, i386, 'unityObject')
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i389 = data
  var i391 = i389[0]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i391[i + 0]) );
  }
  i388.scriptsExecutionOrder = i390
  var i393 = i389[1]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i393[i + 0]) );
  }
  i388.sortingLayers = i392
  var i395 = i389[2]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i395[i + 0]) );
  }
  i388.cullingLayers = i394
  i388.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i389[3], i388.timeSettings)
  i388.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i389[4], i388.physicsSettings)
  i388.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i389[5], i388.physics2DSettings)
  i388.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i389[6], i388.qualitySettings)
  i388.enableRealtimeShadows = !!i389[7]
  i388.enableAutoInstancing = !!i389[8]
  i388.enableDynamicBatching = !!i389[9]
  i388.lightmapEncodingQuality = i389[10]
  i388.desiredColorSpace = i389[11]
  var i397 = i389[12]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( i397[i + 0] );
  }
  i388.allTags = i396
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i401 = data
  i400.name = i401[0]
  i400.value = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i405 = data
  i404.id = i405[0]
  i404.name = i405[1]
  i404.value = i405[2]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i409 = data
  i408.id = i409[0]
  i408.name = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i411 = data
  i410.fixedDeltaTime = i411[0]
  i410.maximumDeltaTime = i411[1]
  i410.timeScale = i411[2]
  i410.maximumParticleTimestep = i411[3]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i413 = data
  i412.gravity = new pc.Vec3( i413[0], i413[1], i413[2] )
  i412.defaultSolverIterations = i413[3]
  i412.bounceThreshold = i413[4]
  i412.autoSyncTransforms = !!i413[5]
  i412.autoSimulation = !!i413[6]
  var i415 = i413[7]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i415[i + 0]) );
  }
  i412.collisionMatrix = i414
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i419 = data
  i418.enabled = !!i419[0]
  i418.layerId = i419[1]
  i418.otherLayerId = i419[2]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i421 = data
  request.r(i421[0], i421[1], 0, i420, 'material')
  i420.gravity = new pc.Vec2( i421[2], i421[3] )
  i420.positionIterations = i421[4]
  i420.velocityIterations = i421[5]
  i420.velocityThreshold = i421[6]
  i420.maxLinearCorrection = i421[7]
  i420.maxAngularCorrection = i421[8]
  i420.maxTranslationSpeed = i421[9]
  i420.maxRotationSpeed = i421[10]
  i420.baumgarteScale = i421[11]
  i420.baumgarteTOIScale = i421[12]
  i420.timeToSleep = i421[13]
  i420.linearSleepTolerance = i421[14]
  i420.angularSleepTolerance = i421[15]
  i420.defaultContactOffset = i421[16]
  i420.autoSimulation = !!i421[17]
  i420.queriesHitTriggers = !!i421[18]
  i420.queriesStartInColliders = !!i421[19]
  i420.callbacksOnDisable = !!i421[20]
  i420.reuseCollisionCallbacks = !!i421[21]
  i420.autoSyncTransforms = !!i421[22]
  var i423 = i421[23]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i423[i + 0]) );
  }
  i420.collisionMatrix = i422
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i427 = data
  i426.enabled = !!i427[0]
  i426.layerId = i427[1]
  i426.otherLayerId = i427[2]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i429 = data
  var i431 = i429[0]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i431[i + 0]) );
  }
  i428.qualityLevels = i430
  var i433 = i429[1]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i428.names = i432
  i428.shadows = i429[2]
  i428.anisotropicFiltering = i429[3]
  i428.antiAliasing = i429[4]
  i428.lodBias = i429[5]
  i428.shadowCascades = i429[6]
  i428.shadowDistance = i429[7]
  i428.shadowmaskMode = i429[8]
  i428.shadowProjection = i429[9]
  i428.shadowResolution = i429[10]
  i428.softParticles = !!i429[11]
  i428.softVegetation = !!i429[12]
  i428.activeColorSpace = i429[13]
  i428.desiredColorSpace = i429[14]
  i428.masterTextureLimit = i429[15]
  i428.maxQueuedFrames = i429[16]
  i428.particleRaycastBudget = i429[17]
  i428.pixelLightCount = i429[18]
  i428.realtimeReflectionProbes = !!i429[19]
  i428.shadowCascade2Split = i429[20]
  i428.shadowCascade4Split = new pc.Vec3( i429[21], i429[22], i429[23] )
  i428.streamingMipmapsActive = !!i429[24]
  i428.vSyncCount = i429[25]
  i428.asyncUploadBufferSize = i429[26]
  i428.asyncUploadTimeSlice = i429[27]
  i428.billboardsFaceCameraPosition = !!i429[28]
  i428.shadowNearPlaneOffset = i429[29]
  i428.streamingMipmapsMemoryBudget = i429[30]
  i428.maximumLODLevel = i429[31]
  i428.streamingMipmapsAddAllCameras = !!i429[32]
  i428.streamingMipmapsMaxLevelReduction = i429[33]
  i428.streamingMipmapsRenderersPerFrame = i429[34]
  i428.resolutionScalingFixedDPIFactor = i429[35]
  i428.streamingMipmapsMaxFileIORequests = i429[36]
  i428.currentQualityLevel = i429[37]
  return i428
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[9],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[33],"34":[33],"35":[33],"36":[33],"37":[33],"38":[33],"39":[33],"40":[33],"41":[33],"42":[33],"43":[33],"44":[33],"45":[33],"46":[9],"47":[48],"49":[50],"51":[50],"52":[11],"6":[53,2],"54":[55],"56":[2],"57":[55],"58":[11],"59":[11],"60":[52],"61":[62,11],"63":[11],"64":[52],"65":[11],"66":[11],"67":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[11],"73":[11],"74":[62,11],"75":[11],"76":[11],"77":[11],"78":[11],"79":[62,11],"80":[11],"81":[82],"83":[82],"84":[82],"85":[82],"86":[9],"87":[9],"88":[89],"90":[9],"91":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Build","UnityEngine.GameObject","UnityEngine.CircleCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","BuildGrid","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.Collider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.22f1";

Deserializers.productName = "PlayAble2D";

Deserializers.lunaInitializationTime = "03/13/2025 18:59:08";

Deserializers.lunaDaysRunning = "4.0";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "27856";

Deserializers.projectId = "127fff9b131b12844843f7bc3bdd87bf";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1712";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2556";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "84166770-6aeb-4468-b6f8-86cadb2d39b5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

