var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.JointSpring' )
  var i1079 = data
  i1078.spring = i1079[0]
  i1078.damper = i1079[1]
  i1078.targetPosition = i1079[2]
  return i1078
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.JointMotor' )
  var i1081 = data
  i1080.m_TargetVelocity = i1081[0]
  i1080.m_Force = i1081[1]
  i1080.m_FreeSpin = i1081[2]
  return i1080
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.JointLimits' )
  var i1083 = data
  i1082.m_Min = i1083[0]
  i1082.m_Max = i1083[1]
  i1082.m_Bounciness = i1083[2]
  i1082.m_BounceMinVelocity = i1083[3]
  i1082.m_ContactDistance = i1083[4]
  i1082.minBounce = i1083[5]
  i1082.maxBounce = i1083[6]
  return i1082
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.JointDrive' )
  var i1085 = data
  i1084.m_PositionSpring = i1085[0]
  i1084.m_PositionDamper = i1085[1]
  i1084.m_MaximumForce = i1085[2]
  i1084.m_UseAcceleration = i1085[3]
  return i1084
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1087 = data
  i1086.m_Spring = i1087[0]
  i1086.m_Damper = i1087[1]
  return i1086
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1089 = data
  i1088.m_Limit = i1089[0]
  i1088.m_Bounciness = i1089[1]
  i1088.m_ContactDistance = i1089[2]
  return i1088
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1091 = data
  i1090.m_ExtremumSlip = i1091[0]
  i1090.m_ExtremumValue = i1091[1]
  i1090.m_AsymptoteSlip = i1091[2]
  i1090.m_AsymptoteValue = i1091[3]
  i1090.m_Stiffness = i1091[4]
  return i1090
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1093 = data
  i1092.m_LowerAngle = i1093[0]
  i1092.m_UpperAngle = i1093[1]
  return i1092
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1095 = data
  i1094.m_MotorSpeed = i1095[0]
  i1094.m_MaximumMotorTorque = i1095[1]
  return i1094
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1097 = data
  i1096.m_DampingRatio = i1097[0]
  i1096.m_Frequency = i1097[1]
  i1096.m_Angle = i1097[2]
  return i1096
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1099 = data
  i1098.m_LowerTranslation = i1099[0]
  i1098.m_UpperTranslation = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1100 = root || new pc.UnityMaterial()
  var i1101 = data
  i1100.name = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, 'shader')
  i1100.renderQueue = i1101[3]
  i1100.enableInstancing = !!i1101[4]
  var i1103 = i1101[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1103[i + 0]) );
  }
  i1100.floatParameters = i1102
  var i1105 = i1101[6]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1105[i + 0]) );
  }
  i1100.colorParameters = i1104
  var i1107 = i1101[7]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1107[i + 0]) );
  }
  i1100.vectorParameters = i1106
  var i1109 = i1101[8]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1109[i + 0]) );
  }
  i1100.textureParameters = i1108
  var i1111 = i1101[9]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1111[i + 0]) );
  }
  i1100.materialFlags = i1110
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.value = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1119 = data
  i1118.name = i1119[0]
  i1118.value = new pc.Color(i1119[1], i1119[2], i1119[3], i1119[4])
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1123 = data
  i1122.name = i1123[0]
  i1122.value = new pc.Vec4( i1123[1], i1123[2], i1123[3], i1123[4] )
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1127 = data
  i1126.name = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'value')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.enabled = !!i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1133 = data
  i1132.position = new pc.Vec3( i1133[0], i1133[1], i1133[2] )
  i1132.scale = new pc.Vec3( i1133[3], i1133[4], i1133[5] )
  i1132.rotation = new pc.Quat(i1133[6], i1133[7], i1133[8], i1133[9])
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1135 = data
  i1134.enabled = !!i1135[0]
  request.r(i1135[1], i1135[2], 0, i1134, 'sharedMaterial')
  var i1137 = i1135[3]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 2) {
  request.r(i1137[i + 0], i1137[i + 1], 2, i1136, '')
  }
  i1134.sharedMaterials = i1136
  i1134.receiveShadows = !!i1135[4]
  i1134.shadowCastingMode = i1135[5]
  i1134.sortingLayerID = i1135[6]
  i1134.sortingOrder = i1135[7]
  i1134.lightmapIndex = i1135[8]
  i1134.lightmapSceneIndex = i1135[9]
  i1134.lightmapScaleOffset = new pc.Vec4( i1135[10], i1135[11], i1135[12], i1135[13] )
  i1134.lightProbeUsage = i1135[14]
  i1134.reflectionProbeUsage = i1135[15]
  i1134.color = new pc.Color(i1135[16], i1135[17], i1135[18], i1135[19])
  request.r(i1135[20], i1135[21], 0, i1134, 'sprite')
  i1134.flipX = !!i1135[22]
  i1134.flipY = !!i1135[23]
  i1134.drawMode = i1135[24]
  i1134.size = new pc.Vec2( i1135[25], i1135[26] )
  i1134.tileMode = i1135[27]
  i1134.adaptiveModeThreshold = i1135[28]
  i1134.maskInteraction = i1135[29]
  i1134.spriteSortPoint = i1135[30]
  return i1134
}

Deserializers["Build"] = function (request, data, root) {
  var i1140 = root || request.c( 'Build' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'buildGrid')
  i1140.snapSpeed = i1141[2]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1143 = data
  i1142.radius = i1143[0]
  i1142.enabled = !!i1143[1]
  i1142.isTrigger = !!i1143[2]
  i1142.usedByEffector = !!i1143[3]
  i1142.density = i1143[4]
  i1142.offset = new pc.Vec2( i1143[5], i1143[6] )
  request.r(i1143[7], i1143[8], 0, i1142, 'material')
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.tagId = i1145[1]
  i1144.enabled = !!i1145[2]
  i1144.isStatic = !!i1145[3]
  i1144.layer = i1145[4]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.index = i1147[1]
  i1146.startup = !!i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1149 = data
  i1148.enabled = !!i1149[0]
  i1148.aspect = i1149[1]
  i1148.orthographic = !!i1149[2]
  i1148.orthographicSize = i1149[3]
  i1148.backgroundColor = new pc.Color(i1149[4], i1149[5], i1149[6], i1149[7])
  i1148.nearClipPlane = i1149[8]
  i1148.farClipPlane = i1149[9]
  i1148.fieldOfView = i1149[10]
  i1148.depth = i1149[11]
  i1148.clearFlags = i1149[12]
  i1148.cullingMask = i1149[13]
  i1148.rect = i1149[14]
  request.r(i1149[15], i1149[16], 0, i1148, 'targetTexture')
  i1148.usePhysicalProperties = !!i1149[17]
  i1148.focalLength = i1149[18]
  i1148.sensorSize = new pc.Vec2( i1149[19], i1149[20] )
  i1148.lensShift = new pc.Vec2( i1149[21], i1149[22] )
  i1148.gateFit = i1149[23]
  i1148.commandBufferCount = i1149[24]
  i1148.cameraType = i1149[25]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1151 = data
  i1150.pivot = new pc.Vec2( i1151[0], i1151[1] )
  i1150.anchorMin = new pc.Vec2( i1151[2], i1151[3] )
  i1150.anchorMax = new pc.Vec2( i1151[4], i1151[5] )
  i1150.sizeDelta = new pc.Vec2( i1151[6], i1151[7] )
  i1150.anchoredPosition3D = new pc.Vec3( i1151[8], i1151[9], i1151[10] )
  i1150.rotation = new pc.Quat(i1151[11], i1151[12], i1151[13], i1151[14])
  i1150.scale = new pc.Vec3( i1151[15], i1151[16], i1151[17] )
  return i1150
}

Deserializers["BuildGrid"] = function (request, data, root) {
  var i1152 = root || request.c( 'BuildGrid' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1152.cells = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1159 = data
  i1158.ambientIntensity = i1159[0]
  i1158.reflectionIntensity = i1159[1]
  i1158.ambientMode = i1159[2]
  i1158.ambientLight = new pc.Color(i1159[3], i1159[4], i1159[5], i1159[6])
  i1158.ambientSkyColor = new pc.Color(i1159[7], i1159[8], i1159[9], i1159[10])
  i1158.ambientGroundColor = new pc.Color(i1159[11], i1159[12], i1159[13], i1159[14])
  i1158.ambientEquatorColor = new pc.Color(i1159[15], i1159[16], i1159[17], i1159[18])
  i1158.fogColor = new pc.Color(i1159[19], i1159[20], i1159[21], i1159[22])
  i1158.fogEndDistance = i1159[23]
  i1158.fogStartDistance = i1159[24]
  i1158.fogDensity = i1159[25]
  i1158.fog = !!i1159[26]
  request.r(i1159[27], i1159[28], 0, i1158, 'skybox')
  i1158.fogMode = i1159[29]
  var i1161 = i1159[30]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1161[i + 0]) );
  }
  i1158.lightmaps = i1160
  i1158.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1159[31], i1158.lightProbes)
  i1158.lightmapsMode = i1159[32]
  i1158.mixedBakeMode = i1159[33]
  i1158.environmentLightingMode = i1159[34]
  i1158.ambientProbe = new pc.SphericalHarmonicsL2(i1159[35])
  i1158.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1159[36])
  i1158.useReferenceAmbientProbe = !!i1159[37]
  request.r(i1159[38], i1159[39], 0, i1158, 'customReflection')
  request.r(i1159[40], i1159[41], 0, i1158, 'defaultReflection')
  i1158.defaultReflectionMode = i1159[42]
  i1158.defaultReflectionResolution = i1159[43]
  i1158.sunLightObjectId = i1159[44]
  i1158.pixelLightCount = i1159[45]
  i1158.defaultReflectionHDR = !!i1159[46]
  i1158.hasLightDataAsset = !!i1159[47]
  i1158.hasManualGenerate = !!i1159[48]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'lightmapColor')
  request.r(i1165[2], i1165[3], 0, i1164, 'lightmapDirection')
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1166 = root || new UnityEngine.LightProbes()
  var i1167 = data
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1177[i + 0]));
  }
  i1174.ShaderCompilationErrors = i1176
  i1174.name = i1175[1]
  i1174.guid = i1175[2]
  var i1179 = i1175[3]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1174.shaderDefinedKeywords = i1178
  var i1181 = i1175[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1181[i + 0]) );
  }
  i1174.passes = i1180
  var i1183 = i1175[5]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1183[i + 0]) );
  }
  i1174.usePasses = i1182
  var i1185 = i1175[6]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1185[i + 0]) );
  }
  i1174.defaultParameterValues = i1184
  request.r(i1175[7], i1175[8], 0, i1174, 'unityFallbackShader')
  i1174.readDepth = !!i1175[9]
  i1174.isCreatedByShaderGraph = !!i1175[10]
  i1174.compiled = !!i1175[11]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1189 = data
  i1188.shaderName = i1189[0]
  i1188.errorMessage = i1189[1]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1194 = root || new pc.UnityShaderPass()
  var i1195 = data
  i1194.id = i1195[0]
  i1194.subShaderIndex = i1195[1]
  i1194.name = i1195[2]
  i1194.passType = i1195[3]
  i1194.grabPassTextureName = i1195[4]
  i1194.usePass = !!i1195[5]
  i1194.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[6], i1194.zTest)
  i1194.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[7], i1194.zWrite)
  i1194.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[8], i1194.culling)
  i1194.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1195[9], i1194.blending)
  i1194.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1195[10], i1194.alphaBlending)
  i1194.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[11], i1194.colorWriteMask)
  i1194.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[12], i1194.offsetUnits)
  i1194.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[13], i1194.offsetFactor)
  i1194.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[14], i1194.stencilRef)
  i1194.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[15], i1194.stencilReadMask)
  i1194.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1195[16], i1194.stencilWriteMask)
  i1194.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1195[17], i1194.stencilOp)
  i1194.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1195[18], i1194.stencilOpFront)
  i1194.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1195[19], i1194.stencilOpBack)
  var i1197 = i1195[20]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1197[i + 0]) );
  }
  i1194.tags = i1196
  var i1199 = i1195[21]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1194.passDefinedKeywords = i1198
  var i1201 = i1195[22]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1201[i + 0]) );
  }
  i1194.passDefinedKeywordGroups = i1200
  var i1203 = i1195[23]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1203[i + 0]) );
  }
  i1194.variants = i1202
  var i1205 = i1195[24]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1205[i + 0]) );
  }
  i1194.excludedVariants = i1204
  i1194.hasDepthReader = !!i1195[25]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1207 = data
  i1206.val = i1207[0]
  i1206.name = i1207[1]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1209 = data
  i1208.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1209[0], i1208.src)
  i1208.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1209[1], i1208.dst)
  i1208.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1209[2], i1208.op)
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1211 = data
  i1210.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[0], i1210.pass)
  i1210.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[1], i1210.fail)
  i1210.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[2], i1210.zFail)
  i1210.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1211[3], i1210.comp)
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1215 = data
  i1214.name = i1215[0]
  i1214.value = i1215[1]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1218.keywords = i1220
  i1218.hasDiscard = !!i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1225 = data
  i1224.passId = i1225[0]
  i1224.subShaderIndex = i1225[1]
  var i1227 = i1225[2]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1224.keywords = i1226
  i1224.vertexProgram = i1225[3]
  i1224.fragmentProgram = i1225[4]
  i1224.exportedForWebGl2 = !!i1225[5]
  i1224.readDepth = !!i1225[6]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'shader')
  i1230.pass = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1235 = data
  i1234.name = i1235[0]
  i1234.type = i1235[1]
  i1234.value = new pc.Vec4( i1235[2], i1235[3], i1235[4], i1235[5] )
  i1234.textureValue = i1235[6]
  i1234.shaderPropertyFlag = i1235[7]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1239[i + 0]) );
  }
  i1236.files = i1238
  i1236.componentToPrefabIds = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1243 = data
  i1242.path = i1243[0]
  request.r(i1243[1], i1243[2], 0, i1242, 'unityObject')
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1245 = data
  var i1247 = i1245[0]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1247[i + 0]) );
  }
  i1244.scriptsExecutionOrder = i1246
  var i1249 = i1245[1]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1249[i + 0]) );
  }
  i1244.sortingLayers = i1248
  var i1251 = i1245[2]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1251[i + 0]) );
  }
  i1244.cullingLayers = i1250
  i1244.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1245[3], i1244.timeSettings)
  i1244.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1245[4], i1244.physicsSettings)
  i1244.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1245[5], i1244.physics2DSettings)
  i1244.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1245[6], i1244.qualitySettings)
  i1244.enableRealtimeShadows = !!i1245[7]
  i1244.enableAutoInstancing = !!i1245[8]
  i1244.enableDynamicBatching = !!i1245[9]
  i1244.lightmapEncodingQuality = i1245[10]
  i1244.desiredColorSpace = i1245[11]
  var i1253 = i1245[12]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( i1253[i + 0] );
  }
  i1244.allTags = i1252
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.value = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1261 = data
  i1260.id = i1261[0]
  i1260.name = i1261[1]
  i1260.value = i1261[2]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1265 = data
  i1264.id = i1265[0]
  i1264.name = i1265[1]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1267 = data
  i1266.fixedDeltaTime = i1267[0]
  i1266.maximumDeltaTime = i1267[1]
  i1266.timeScale = i1267[2]
  i1266.maximumParticleTimestep = i1267[3]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1269 = data
  i1268.gravity = new pc.Vec3( i1269[0], i1269[1], i1269[2] )
  i1268.defaultSolverIterations = i1269[3]
  i1268.bounceThreshold = i1269[4]
  i1268.autoSyncTransforms = !!i1269[5]
  i1268.autoSimulation = !!i1269[6]
  var i1271 = i1269[7]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1271[i + 0]) );
  }
  i1268.collisionMatrix = i1270
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1275 = data
  i1274.enabled = !!i1275[0]
  i1274.layerId = i1275[1]
  i1274.otherLayerId = i1275[2]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1277 = data
  request.r(i1277[0], i1277[1], 0, i1276, 'material')
  i1276.gravity = new pc.Vec2( i1277[2], i1277[3] )
  i1276.positionIterations = i1277[4]
  i1276.velocityIterations = i1277[5]
  i1276.velocityThreshold = i1277[6]
  i1276.maxLinearCorrection = i1277[7]
  i1276.maxAngularCorrection = i1277[8]
  i1276.maxTranslationSpeed = i1277[9]
  i1276.maxRotationSpeed = i1277[10]
  i1276.baumgarteScale = i1277[11]
  i1276.baumgarteTOIScale = i1277[12]
  i1276.timeToSleep = i1277[13]
  i1276.linearSleepTolerance = i1277[14]
  i1276.angularSleepTolerance = i1277[15]
  i1276.defaultContactOffset = i1277[16]
  i1276.autoSimulation = !!i1277[17]
  i1276.queriesHitTriggers = !!i1277[18]
  i1276.queriesStartInColliders = !!i1277[19]
  i1276.callbacksOnDisable = !!i1277[20]
  i1276.reuseCollisionCallbacks = !!i1277[21]
  i1276.autoSyncTransforms = !!i1277[22]
  var i1279 = i1277[23]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1279[i + 0]) );
  }
  i1276.collisionMatrix = i1278
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1283 = data
  i1282.enabled = !!i1283[0]
  i1282.layerId = i1283[1]
  i1282.otherLayerId = i1283[2]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1287[i + 0]) );
  }
  i1284.qualityLevels = i1286
  var i1289 = i1285[1]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1284.names = i1288
  i1284.shadows = i1285[2]
  i1284.anisotropicFiltering = i1285[3]
  i1284.antiAliasing = i1285[4]
  i1284.lodBias = i1285[5]
  i1284.shadowCascades = i1285[6]
  i1284.shadowDistance = i1285[7]
  i1284.shadowmaskMode = i1285[8]
  i1284.shadowProjection = i1285[9]
  i1284.shadowResolution = i1285[10]
  i1284.softParticles = !!i1285[11]
  i1284.softVegetation = !!i1285[12]
  i1284.activeColorSpace = i1285[13]
  i1284.desiredColorSpace = i1285[14]
  i1284.masterTextureLimit = i1285[15]
  i1284.maxQueuedFrames = i1285[16]
  i1284.particleRaycastBudget = i1285[17]
  i1284.pixelLightCount = i1285[18]
  i1284.realtimeReflectionProbes = !!i1285[19]
  i1284.shadowCascade2Split = i1285[20]
  i1284.shadowCascade4Split = new pc.Vec3( i1285[21], i1285[22], i1285[23] )
  i1284.streamingMipmapsActive = !!i1285[24]
  i1284.vSyncCount = i1285[25]
  i1284.asyncUploadBufferSize = i1285[26]
  i1284.asyncUploadTimeSlice = i1285[27]
  i1284.billboardsFaceCameraPosition = !!i1285[28]
  i1284.shadowNearPlaneOffset = i1285[29]
  i1284.streamingMipmapsMemoryBudget = i1285[30]
  i1284.maximumLODLevel = i1285[31]
  i1284.streamingMipmapsAddAllCameras = !!i1285[32]
  i1284.streamingMipmapsMaxLevelReduction = i1285[33]
  i1284.streamingMipmapsRenderersPerFrame = i1285[34]
  i1284.resolutionScalingFixedDPIFactor = i1285[35]
  i1284.streamingMipmapsMaxFileIORequests = i1285[36]
  i1284.currentQualityLevel = i1285[37]
  return i1284
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"12":[13],"14":[13],"15":[13],"16":[13],"17":[13],"18":[13],"19":[20],"21":[8],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[31],"38":[31],"39":[31],"40":[31],"41":[31],"42":[31],"43":[31],"44":[8],"45":[46],"47":[48],"49":[48],"50":[11],"6":[51,2],"52":[53],"54":[2],"55":[53],"56":[11],"57":[11],"58":[50],"59":[60,11],"61":[11],"62":[50],"63":[11],"64":[11],"65":[11],"66":[11],"67":[11],"68":[11],"69":[11],"70":[11],"71":[11],"72":[60,11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[60,11],"78":[11],"79":[80],"81":[80],"82":[80],"83":[80],"84":[8],"85":[8],"86":[87],"88":[8],"89":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Build","UnityEngine.CircleCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","BuildGrid","UnityEngine.RectTransform","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.Collider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.22f1";

Deserializers.productName = "PlayAble2D";

Deserializers.lunaInitializationTime = "03/13/2025 18:59:08";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.buildID = "44fed98b-31cd-4f5f-8514-28c9bf57d1f3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

