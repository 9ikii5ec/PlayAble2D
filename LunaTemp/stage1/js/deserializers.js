var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.JointSpring' )
  var i1981 = data
  i1980.spring = i1981[0]
  i1980.damper = i1981[1]
  i1980.targetPosition = i1981[2]
  return i1980
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.JointMotor' )
  var i1983 = data
  i1982.m_TargetVelocity = i1983[0]
  i1982.m_Force = i1983[1]
  i1982.m_FreeSpin = i1983[2]
  return i1982
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.JointLimits' )
  var i1985 = data
  i1984.m_Min = i1985[0]
  i1984.m_Max = i1985[1]
  i1984.m_Bounciness = i1985[2]
  i1984.m_BounceMinVelocity = i1985[3]
  i1984.m_ContactDistance = i1985[4]
  i1984.minBounce = i1985[5]
  i1984.maxBounce = i1985[6]
  return i1984
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.JointDrive' )
  var i1987 = data
  i1986.m_PositionSpring = i1987[0]
  i1986.m_PositionDamper = i1987[1]
  i1986.m_MaximumForce = i1987[2]
  i1986.m_UseAcceleration = i1987[3]
  return i1986
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1989 = data
  i1988.m_Spring = i1989[0]
  i1988.m_Damper = i1989[1]
  return i1988
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1991 = data
  i1990.m_Limit = i1991[0]
  i1990.m_Bounciness = i1991[1]
  i1990.m_ContactDistance = i1991[2]
  return i1990
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1993 = data
  i1992.m_ExtremumSlip = i1993[0]
  i1992.m_ExtremumValue = i1993[1]
  i1992.m_AsymptoteSlip = i1993[2]
  i1992.m_AsymptoteValue = i1993[3]
  i1992.m_Stiffness = i1993[4]
  return i1992
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1995 = data
  i1994.m_LowerAngle = i1995[0]
  i1994.m_UpperAngle = i1995[1]
  return i1994
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1997 = data
  i1996.m_MotorSpeed = i1997[0]
  i1996.m_MaximumMotorTorque = i1997[1]
  return i1996
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1998 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1999 = data
  i1998.m_DampingRatio = i1999[0]
  i1998.m_Frequency = i1999[1]
  i1998.m_Angle = i1999[2]
  return i1998
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2000 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2001 = data
  i2000.m_LowerTranslation = i2001[0]
  i2000.m_UpperTranslation = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2002 = root || new pc.UnityMaterial()
  var i2003 = data
  i2002.name = i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'shader')
  i2002.renderQueue = i2003[3]
  i2002.enableInstancing = !!i2003[4]
  var i2005 = i2003[5]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2005[i + 0]) );
  }
  i2002.floatParameters = i2004
  var i2007 = i2003[6]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2007[i + 0]) );
  }
  i2002.colorParameters = i2006
  var i2009 = i2003[7]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2009[i + 0]) );
  }
  i2002.vectorParameters = i2008
  var i2011 = i2003[8]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2011[i + 0]) );
  }
  i2002.textureParameters = i2010
  var i2013 = i2003[9]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2013[i + 0]) );
  }
  i2002.materialFlags = i2012
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2017 = data
  i2016.name = i2017[0]
  i2016.value = i2017[1]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2021 = data
  i2020.name = i2021[0]
  i2020.value = new pc.Color(i2021[1], i2021[2], i2021[3], i2021[4])
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2025 = data
  i2024.name = i2025[0]
  i2024.value = new pc.Vec4( i2025[1], i2025[2], i2025[3], i2025[4] )
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2029 = data
  i2028.name = i2029[0]
  request.r(i2029[1], i2029[2], 0, i2028, 'value')
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2033 = data
  i2032.name = i2033[0]
  i2032.enabled = !!i2033[1]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2035 = data
  i2034.name = i2035[0]
  i2034.width = i2035[1]
  i2034.height = i2035[2]
  i2034.mipmapCount = i2035[3]
  i2034.anisoLevel = i2035[4]
  i2034.filterMode = i2035[5]
  i2034.hdr = !!i2035[6]
  i2034.format = i2035[7]
  i2034.wrapMode = i2035[8]
  i2034.alphaIsTransparency = !!i2035[9]
  i2034.alphaSource = i2035[10]
  i2034.graphicsFormat = i2035[11]
  i2034.sRGBTexture = !!i2035[12]
  i2034.desiredColorSpace = i2035[13]
  i2034.wrapU = i2035[14]
  i2034.wrapV = i2035[15]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2037 = data
  i2036.position = new pc.Vec3( i2037[0], i2037[1], i2037[2] )
  i2036.scale = new pc.Vec3( i2037[3], i2037[4], i2037[5] )
  i2036.rotation = new pc.Quat(i2037[6], i2037[7], i2037[8], i2037[9])
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2039 = data
  i2038.enabled = !!i2039[0]
  request.r(i2039[1], i2039[2], 0, i2038, 'sharedMaterial')
  var i2041 = i2039[3]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 2, i2040, '')
  }
  i2038.sharedMaterials = i2040
  i2038.receiveShadows = !!i2039[4]
  i2038.shadowCastingMode = i2039[5]
  i2038.sortingLayerID = i2039[6]
  i2038.sortingOrder = i2039[7]
  i2038.lightmapIndex = i2039[8]
  i2038.lightmapSceneIndex = i2039[9]
  i2038.lightmapScaleOffset = new pc.Vec4( i2039[10], i2039[11], i2039[12], i2039[13] )
  i2038.lightProbeUsage = i2039[14]
  i2038.reflectionProbeUsage = i2039[15]
  i2038.color = new pc.Color(i2039[16], i2039[17], i2039[18], i2039[19])
  request.r(i2039[20], i2039[21], 0, i2038, 'sprite')
  i2038.flipX = !!i2039[22]
  i2038.flipY = !!i2039[23]
  i2038.drawMode = i2039[24]
  i2038.size = new pc.Vec2( i2039[25], i2039[26] )
  i2038.tileMode = i2039[27]
  i2038.adaptiveModeThreshold = i2039[28]
  i2038.maskInteraction = i2039[29]
  i2038.spriteSortPoint = i2039[30]
  return i2038
}

Deserializers["Build"] = function (request, data, root) {
  var i2044 = root || request.c( 'Build' )
  var i2045 = data
  request.r(i2045[0], i2045[1], 0, i2044, 'buildGrid')
  i2044.snapDistance = i2045[2]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2047 = data
  i2046.bodyType = i2047[0]
  request.r(i2047[1], i2047[2], 0, i2046, 'material')
  i2046.simulated = !!i2047[3]
  i2046.useAutoMass = !!i2047[4]
  i2046.mass = i2047[5]
  i2046.drag = i2047[6]
  i2046.angularDrag = i2047[7]
  i2046.gravityScale = i2047[8]
  i2046.collisionDetectionMode = i2047[9]
  i2046.sleepMode = i2047[10]
  i2046.constraints = i2047[11]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2049 = data
  i2048.radius = i2049[0]
  i2048.enabled = !!i2049[1]
  i2048.isTrigger = !!i2049[2]
  i2048.usedByEffector = !!i2049[3]
  i2048.density = i2049[4]
  i2048.offset = new pc.Vec2( i2049[5], i2049[6] )
  request.r(i2049[7], i2049[8], 0, i2048, 'material')
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2051 = data
  i2050.name = i2051[0]
  i2050.tagId = i2051[1]
  i2050.enabled = !!i2051[2]
  i2050.isStatic = !!i2051[3]
  i2050.layer = i2051[4]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2053 = data
  i2052.name = i2053[0]
  i2052.index = i2053[1]
  i2052.startup = !!i2053[2]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2055 = data
  i2054.enabled = !!i2055[0]
  i2054.aspect = i2055[1]
  i2054.orthographic = !!i2055[2]
  i2054.orthographicSize = i2055[3]
  i2054.backgroundColor = new pc.Color(i2055[4], i2055[5], i2055[6], i2055[7])
  i2054.nearClipPlane = i2055[8]
  i2054.farClipPlane = i2055[9]
  i2054.fieldOfView = i2055[10]
  i2054.depth = i2055[11]
  i2054.clearFlags = i2055[12]
  i2054.cullingMask = i2055[13]
  i2054.rect = i2055[14]
  request.r(i2055[15], i2055[16], 0, i2054, 'targetTexture')
  i2054.usePhysicalProperties = !!i2055[17]
  i2054.focalLength = i2055[18]
  i2054.sensorSize = new pc.Vec2( i2055[19], i2055[20] )
  i2054.lensShift = new pc.Vec2( i2055[21], i2055[22] )
  i2054.gateFit = i2055[23]
  i2054.commandBufferCount = i2055[24]
  i2054.cameraType = i2055[25]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2057 = data
  i2056.pivot = new pc.Vec2( i2057[0], i2057[1] )
  i2056.anchorMin = new pc.Vec2( i2057[2], i2057[3] )
  i2056.anchorMax = new pc.Vec2( i2057[4], i2057[5] )
  i2056.sizeDelta = new pc.Vec2( i2057[6], i2057[7] )
  i2056.anchoredPosition3D = new pc.Vec3( i2057[8], i2057[9], i2057[10] )
  i2056.rotation = new pc.Quat(i2057[11], i2057[12], i2057[13], i2057[14])
  i2056.scale = new pc.Vec3( i2057[15], i2057[16], i2057[17] )
  return i2056
}

Deserializers["BuildGrid"] = function (request, data, root) {
  var i2058 = root || request.c( 'BuildGrid' )
  var i2059 = data
  var i2061 = i2059[0]
  var i2060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2061.length; i += 2) {
  request.r(i2061[i + 0], i2061[i + 1], 1, i2060, '')
  }
  i2058.cells = i2060
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2065 = data
  i2064.ambientIntensity = i2065[0]
  i2064.reflectionIntensity = i2065[1]
  i2064.ambientMode = i2065[2]
  i2064.ambientLight = new pc.Color(i2065[3], i2065[4], i2065[5], i2065[6])
  i2064.ambientSkyColor = new pc.Color(i2065[7], i2065[8], i2065[9], i2065[10])
  i2064.ambientGroundColor = new pc.Color(i2065[11], i2065[12], i2065[13], i2065[14])
  i2064.ambientEquatorColor = new pc.Color(i2065[15], i2065[16], i2065[17], i2065[18])
  i2064.fogColor = new pc.Color(i2065[19], i2065[20], i2065[21], i2065[22])
  i2064.fogEndDistance = i2065[23]
  i2064.fogStartDistance = i2065[24]
  i2064.fogDensity = i2065[25]
  i2064.fog = !!i2065[26]
  request.r(i2065[27], i2065[28], 0, i2064, 'skybox')
  i2064.fogMode = i2065[29]
  var i2067 = i2065[30]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2067[i + 0]) );
  }
  i2064.lightmaps = i2066
  i2064.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2065[31], i2064.lightProbes)
  i2064.lightmapsMode = i2065[32]
  i2064.mixedBakeMode = i2065[33]
  i2064.environmentLightingMode = i2065[34]
  i2064.ambientProbe = new pc.SphericalHarmonicsL2(i2065[35])
  i2064.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2065[36])
  i2064.useReferenceAmbientProbe = !!i2065[37]
  request.r(i2065[38], i2065[39], 0, i2064, 'customReflection')
  request.r(i2065[40], i2065[41], 0, i2064, 'defaultReflection')
  i2064.defaultReflectionMode = i2065[42]
  i2064.defaultReflectionResolution = i2065[43]
  i2064.sunLightObjectId = i2065[44]
  i2064.pixelLightCount = i2065[45]
  i2064.defaultReflectionHDR = !!i2065[46]
  i2064.hasLightDataAsset = !!i2065[47]
  i2064.hasManualGenerate = !!i2065[48]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'lightmapColor')
  request.r(i2071[2], i2071[3], 0, i2070, 'lightmapDirection')
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2072 = root || new UnityEngine.LightProbes()
  var i2073 = data
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2081 = data
  var i2083 = i2081[0]
  var i2082 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2083[i + 0]));
  }
  i2080.ShaderCompilationErrors = i2082
  i2080.name = i2081[1]
  i2080.guid = i2081[2]
  var i2085 = i2081[3]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( i2085[i + 0] );
  }
  i2080.shaderDefinedKeywords = i2084
  var i2087 = i2081[4]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2087[i + 0]) );
  }
  i2080.passes = i2086
  var i2089 = i2081[5]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2089[i + 0]) );
  }
  i2080.usePasses = i2088
  var i2091 = i2081[6]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2091[i + 0]) );
  }
  i2080.defaultParameterValues = i2090
  request.r(i2081[7], i2081[8], 0, i2080, 'unityFallbackShader')
  i2080.readDepth = !!i2081[9]
  i2080.isCreatedByShaderGraph = !!i2081[10]
  i2080.compiled = !!i2081[11]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2095 = data
  i2094.shaderName = i2095[0]
  i2094.errorMessage = i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2100 = root || new pc.UnityShaderPass()
  var i2101 = data
  i2100.id = i2101[0]
  i2100.subShaderIndex = i2101[1]
  i2100.name = i2101[2]
  i2100.passType = i2101[3]
  i2100.grabPassTextureName = i2101[4]
  i2100.usePass = !!i2101[5]
  i2100.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[6], i2100.zTest)
  i2100.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[7], i2100.zWrite)
  i2100.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[8], i2100.culling)
  i2100.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2101[9], i2100.blending)
  i2100.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2101[10], i2100.alphaBlending)
  i2100.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[11], i2100.colorWriteMask)
  i2100.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[12], i2100.offsetUnits)
  i2100.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[13], i2100.offsetFactor)
  i2100.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[14], i2100.stencilRef)
  i2100.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[15], i2100.stencilReadMask)
  i2100.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2101[16], i2100.stencilWriteMask)
  i2100.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2101[17], i2100.stencilOp)
  i2100.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2101[18], i2100.stencilOpFront)
  i2100.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2101[19], i2100.stencilOpBack)
  var i2103 = i2101[20]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2103[i + 0]) );
  }
  i2100.tags = i2102
  var i2105 = i2101[21]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( i2105[i + 0] );
  }
  i2100.passDefinedKeywords = i2104
  var i2107 = i2101[22]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2107[i + 0]) );
  }
  i2100.passDefinedKeywordGroups = i2106
  var i2109 = i2101[23]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2109[i + 0]) );
  }
  i2100.variants = i2108
  var i2111 = i2101[24]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2111[i + 0]) );
  }
  i2100.excludedVariants = i2110
  i2100.hasDepthReader = !!i2101[25]
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2113 = data
  i2112.val = i2113[0]
  i2112.name = i2113[1]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2115 = data
  i2114.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[0], i2114.src)
  i2114.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[1], i2114.dst)
  i2114.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2115[2], i2114.op)
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2117 = data
  i2116.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[0], i2116.pass)
  i2116.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[1], i2116.fail)
  i2116.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[2], i2116.zFail)
  i2116.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[3], i2116.comp)
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.value = i2121[1]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2125 = data
  var i2127 = i2125[0]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( i2127[i + 0] );
  }
  i2124.keywords = i2126
  i2124.hasDiscard = !!i2125[1]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2131 = data
  i2130.passId = i2131[0]
  i2130.subShaderIndex = i2131[1]
  var i2133 = i2131[2]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( i2133[i + 0] );
  }
  i2130.keywords = i2132
  i2130.vertexProgram = i2131[3]
  i2130.fragmentProgram = i2131[4]
  i2130.exportedForWebGl2 = !!i2131[5]
  i2130.readDepth = !!i2131[6]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'shader')
  i2136.pass = i2137[2]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2141 = data
  i2140.name = i2141[0]
  i2140.type = i2141[1]
  i2140.value = new pc.Vec4( i2141[2], i2141[3], i2141[4], i2141[5] )
  i2140.textureValue = i2141[6]
  i2140.shaderPropertyFlag = i2141[7]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2143 = data
  i2142.name = i2143[0]
  request.r(i2143[1], i2143[2], 0, i2142, 'texture')
  i2142.aabb = i2143[3]
  i2142.vertices = i2143[4]
  i2142.triangles = i2143[5]
  i2142.textureRect = UnityEngine.Rect.MinMaxRect(i2143[6], i2143[7], i2143[8], i2143[9])
  i2142.packedRect = UnityEngine.Rect.MinMaxRect(i2143[10], i2143[11], i2143[12], i2143[13])
  i2142.border = new pc.Vec4( i2143[14], i2143[15], i2143[16], i2143[17] )
  i2142.transparency = i2143[18]
  i2142.bounds = i2143[19]
  i2142.pixelsPerUnit = i2143[20]
  i2142.textureWidth = i2143[21]
  i2142.textureHeight = i2143[22]
  i2142.nativeSize = new pc.Vec2( i2143[23], i2143[24] )
  i2142.pivot = new pc.Vec2( i2143[25], i2143[26] )
  i2142.textureRectOffset = new pc.Vec2( i2143[27], i2143[28] )
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2145 = data
  var i2147 = i2145[0]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2147[i + 0]) );
  }
  i2144.files = i2146
  i2144.componentToPrefabIds = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2151 = data
  i2150.path = i2151[0]
  request.r(i2151[1], i2151[2], 0, i2150, 'unityObject')
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2153 = data
  var i2155 = i2153[0]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2155[i + 0]) );
  }
  i2152.scriptsExecutionOrder = i2154
  var i2157 = i2153[1]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2157[i + 0]) );
  }
  i2152.sortingLayers = i2156
  var i2159 = i2153[2]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2159[i + 0]) );
  }
  i2152.cullingLayers = i2158
  i2152.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2153[3], i2152.timeSettings)
  i2152.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2153[4], i2152.physicsSettings)
  i2152.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2153[5], i2152.physics2DSettings)
  i2152.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2153[6], i2152.qualitySettings)
  i2152.enableRealtimeShadows = !!i2153[7]
  i2152.enableAutoInstancing = !!i2153[8]
  i2152.enableDynamicBatching = !!i2153[9]
  i2152.lightmapEncodingQuality = i2153[10]
  i2152.desiredColorSpace = i2153[11]
  var i2161 = i2153[12]
  var i2160 = []
  for(var i = 0; i < i2161.length; i += 1) {
    i2160.push( i2161[i + 0] );
  }
  i2152.allTags = i2160
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.value = i2165[1]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2169 = data
  i2168.id = i2169[0]
  i2168.name = i2169[1]
  i2168.value = i2169[2]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2173 = data
  i2172.id = i2173[0]
  i2172.name = i2173[1]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2175 = data
  i2174.fixedDeltaTime = i2175[0]
  i2174.maximumDeltaTime = i2175[1]
  i2174.timeScale = i2175[2]
  i2174.maximumParticleTimestep = i2175[3]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2177 = data
  i2176.gravity = new pc.Vec3( i2177[0], i2177[1], i2177[2] )
  i2176.defaultSolverIterations = i2177[3]
  i2176.bounceThreshold = i2177[4]
  i2176.autoSyncTransforms = !!i2177[5]
  i2176.autoSimulation = !!i2177[6]
  var i2179 = i2177[7]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2179[i + 0]) );
  }
  i2176.collisionMatrix = i2178
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.layerId = i2183[1]
  i2182.otherLayerId = i2183[2]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'material')
  i2184.gravity = new pc.Vec2( i2185[2], i2185[3] )
  i2184.positionIterations = i2185[4]
  i2184.velocityIterations = i2185[5]
  i2184.velocityThreshold = i2185[6]
  i2184.maxLinearCorrection = i2185[7]
  i2184.maxAngularCorrection = i2185[8]
  i2184.maxTranslationSpeed = i2185[9]
  i2184.maxRotationSpeed = i2185[10]
  i2184.baumgarteScale = i2185[11]
  i2184.baumgarteTOIScale = i2185[12]
  i2184.timeToSleep = i2185[13]
  i2184.linearSleepTolerance = i2185[14]
  i2184.angularSleepTolerance = i2185[15]
  i2184.defaultContactOffset = i2185[16]
  i2184.autoSimulation = !!i2185[17]
  i2184.queriesHitTriggers = !!i2185[18]
  i2184.queriesStartInColliders = !!i2185[19]
  i2184.callbacksOnDisable = !!i2185[20]
  i2184.reuseCollisionCallbacks = !!i2185[21]
  i2184.autoSyncTransforms = !!i2185[22]
  var i2187 = i2185[23]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2187[i + 0]) );
  }
  i2184.collisionMatrix = i2186
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.layerId = i2191[1]
  i2190.otherLayerId = i2191[2]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2193 = data
  var i2195 = i2193[0]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 1) {
    i2194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2195[i + 0]) );
  }
  i2192.qualityLevels = i2194
  var i2197 = i2193[1]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( i2197[i + 0] );
  }
  i2192.names = i2196
  i2192.shadows = i2193[2]
  i2192.anisotropicFiltering = i2193[3]
  i2192.antiAliasing = i2193[4]
  i2192.lodBias = i2193[5]
  i2192.shadowCascades = i2193[6]
  i2192.shadowDistance = i2193[7]
  i2192.shadowmaskMode = i2193[8]
  i2192.shadowProjection = i2193[9]
  i2192.shadowResolution = i2193[10]
  i2192.softParticles = !!i2193[11]
  i2192.softVegetation = !!i2193[12]
  i2192.activeColorSpace = i2193[13]
  i2192.desiredColorSpace = i2193[14]
  i2192.masterTextureLimit = i2193[15]
  i2192.maxQueuedFrames = i2193[16]
  i2192.particleRaycastBudget = i2193[17]
  i2192.pixelLightCount = i2193[18]
  i2192.realtimeReflectionProbes = !!i2193[19]
  i2192.shadowCascade2Split = i2193[20]
  i2192.shadowCascade4Split = new pc.Vec3( i2193[21], i2193[22], i2193[23] )
  i2192.streamingMipmapsActive = !!i2193[24]
  i2192.vSyncCount = i2193[25]
  i2192.asyncUploadBufferSize = i2193[26]
  i2192.asyncUploadTimeSlice = i2193[27]
  i2192.billboardsFaceCameraPosition = !!i2193[28]
  i2192.shadowNearPlaneOffset = i2193[29]
  i2192.streamingMipmapsMemoryBudget = i2193[30]
  i2192.maximumLODLevel = i2193[31]
  i2192.streamingMipmapsAddAllCameras = !!i2193[32]
  i2192.streamingMipmapsMaxLevelReduction = i2193[33]
  i2192.streamingMipmapsRenderersPerFrame = i2193[34]
  i2192.resolutionScalingFixedDPIFactor = i2193[35]
  i2192.streamingMipmapsMaxFileIORequests = i2193[36]
  i2192.currentQualityLevel = i2193[37]
  return i2192
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"14":[15],"16":[15],"17":[15],"18":[15],"19":[15],"20":[15],"21":[22],"23":[9],"24":[25],"26":[25],"27":[25],"28":[25],"29":[25],"30":[25],"31":[25],"32":[7],"33":[7],"34":[7],"35":[7],"36":[7],"37":[7],"38":[7],"39":[7],"40":[7],"41":[7],"42":[7],"43":[7],"44":[7],"45":[9],"46":[47],"48":[49],"50":[49],"51":[12],"52":[53],"54":[2],"55":[53],"56":[12],"57":[12],"58":[51],"59":[60,12],"61":[12],"62":[51],"63":[12],"64":[12],"65":[12],"66":[12],"67":[12],"68":[12],"69":[12],"70":[12],"71":[12],"72":[60,12],"73":[12],"74":[12],"75":[12],"76":[12],"77":[60,12],"78":[12],"79":[80],"81":[80],"82":[80],"83":[80],"84":[9],"85":[9],"86":[87],"88":[9],"89":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Build","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","BuildGrid","UnityEngine.RectTransform","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.22f1";

Deserializers.productName = "PlayAble2D";

Deserializers.lunaInitializationTime = "03/13/2025 18:59:08";

Deserializers.lunaDaysRunning = "0.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "773619dd-1267-48d0-881f-f0f81ccfedfe";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

