var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.JointSpring' )
  var i1089 = data
  i1088.spring = i1089[0]
  i1088.damper = i1089[1]
  i1088.targetPosition = i1089[2]
  return i1088
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.JointMotor' )
  var i1091 = data
  i1090.m_TargetVelocity = i1091[0]
  i1090.m_Force = i1091[1]
  i1090.m_FreeSpin = i1091[2]
  return i1090
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.JointLimits' )
  var i1093 = data
  i1092.m_Min = i1093[0]
  i1092.m_Max = i1093[1]
  i1092.m_Bounciness = i1093[2]
  i1092.m_BounceMinVelocity = i1093[3]
  i1092.m_ContactDistance = i1093[4]
  i1092.minBounce = i1093[5]
  i1092.maxBounce = i1093[6]
  return i1092
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.JointDrive' )
  var i1095 = data
  i1094.m_PositionSpring = i1095[0]
  i1094.m_PositionDamper = i1095[1]
  i1094.m_MaximumForce = i1095[2]
  i1094.m_UseAcceleration = i1095[3]
  return i1094
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1097 = data
  i1096.m_Spring = i1097[0]
  i1096.m_Damper = i1097[1]
  return i1096
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1099 = data
  i1098.m_Limit = i1099[0]
  i1098.m_Bounciness = i1099[1]
  i1098.m_ContactDistance = i1099[2]
  return i1098
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1101 = data
  i1100.m_ExtremumSlip = i1101[0]
  i1100.m_ExtremumValue = i1101[1]
  i1100.m_AsymptoteSlip = i1101[2]
  i1100.m_AsymptoteValue = i1101[3]
  i1100.m_Stiffness = i1101[4]
  return i1100
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1103 = data
  i1102.m_LowerAngle = i1103[0]
  i1102.m_UpperAngle = i1103[1]
  return i1102
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1105 = data
  i1104.m_MotorSpeed = i1105[0]
  i1104.m_MaximumMotorTorque = i1105[1]
  return i1104
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1107 = data
  i1106.m_DampingRatio = i1107[0]
  i1106.m_Frequency = i1107[1]
  i1106.m_Angle = i1107[2]
  return i1106
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1109 = data
  i1108.m_LowerTranslation = i1109[0]
  i1108.m_UpperTranslation = i1109[1]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1110 = root || new pc.UnityMaterial()
  var i1111 = data
  i1110.name = i1111[0]
  request.r(i1111[1], i1111[2], 0, i1110, 'shader')
  i1110.renderQueue = i1111[3]
  i1110.enableInstancing = !!i1111[4]
  var i1113 = i1111[5]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1113[i + 0]) );
  }
  i1110.floatParameters = i1112
  var i1115 = i1111[6]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1115[i + 0]) );
  }
  i1110.colorParameters = i1114
  var i1117 = i1111[7]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1117[i + 0]) );
  }
  i1110.vectorParameters = i1116
  var i1119 = i1111[8]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1119[i + 0]) );
  }
  i1110.textureParameters = i1118
  var i1121 = i1111[9]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1121[i + 0]) );
  }
  i1110.materialFlags = i1120
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.value = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.value = new pc.Color(i1129[1], i1129[2], i1129[3], i1129[4])
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.value = new pc.Vec4( i1133[1], i1133[2], i1133[3], i1133[4] )
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1137 = data
  i1136.name = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'value')
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.enabled = !!i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1143 = data
  i1142.position = new pc.Vec3( i1143[0], i1143[1], i1143[2] )
  i1142.scale = new pc.Vec3( i1143[3], i1143[4], i1143[5] )
  i1142.rotation = new pc.Quat(i1143[6], i1143[7], i1143[8], i1143[9])
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1145 = data
  i1144.enabled = !!i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'sharedMaterial')
  var i1147 = i1145[3]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1144.sharedMaterials = i1146
  i1144.receiveShadows = !!i1145[4]
  i1144.shadowCastingMode = i1145[5]
  i1144.sortingLayerID = i1145[6]
  i1144.sortingOrder = i1145[7]
  i1144.lightmapIndex = i1145[8]
  i1144.lightmapSceneIndex = i1145[9]
  i1144.lightmapScaleOffset = new pc.Vec4( i1145[10], i1145[11], i1145[12], i1145[13] )
  i1144.lightProbeUsage = i1145[14]
  i1144.reflectionProbeUsage = i1145[15]
  i1144.color = new pc.Color(i1145[16], i1145[17], i1145[18], i1145[19])
  request.r(i1145[20], i1145[21], 0, i1144, 'sprite')
  i1144.flipX = !!i1145[22]
  i1144.flipY = !!i1145[23]
  i1144.drawMode = i1145[24]
  i1144.size = new pc.Vec2( i1145[25], i1145[26] )
  i1144.tileMode = i1145[27]
  i1144.adaptiveModeThreshold = i1145[28]
  i1144.maskInteraction = i1145[29]
  i1144.spriteSortPoint = i1145[30]
  return i1144
}

Deserializers["Build"] = function (request, data, root) {
  var i1150 = root || request.c( 'Build' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'buildGrid')
  i1150.snapDistance = i1151[2]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1153 = data
  i1152.bodyType = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'material')
  i1152.simulated = !!i1153[3]
  i1152.useAutoMass = !!i1153[4]
  i1152.mass = i1153[5]
  i1152.drag = i1153[6]
  i1152.angularDrag = i1153[7]
  i1152.gravityScale = i1153[8]
  i1152.collisionDetectionMode = i1153[9]
  i1152.sleepMode = i1153[10]
  i1152.constraints = i1153[11]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1155 = data
  i1154.radius = i1155[0]
  i1154.enabled = !!i1155[1]
  i1154.isTrigger = !!i1155[2]
  i1154.usedByEffector = !!i1155[3]
  i1154.density = i1155[4]
  i1154.offset = new pc.Vec2( i1155[5], i1155[6] )
  request.r(i1155[7], i1155[8], 0, i1154, 'material')
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.tagId = i1157[1]
  i1156.enabled = !!i1157[2]
  i1156.isStatic = !!i1157[3]
  i1156.layer = i1157[4]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.index = i1159[1]
  i1158.startup = !!i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1161 = data
  i1160.enabled = !!i1161[0]
  i1160.aspect = i1161[1]
  i1160.orthographic = !!i1161[2]
  i1160.orthographicSize = i1161[3]
  i1160.backgroundColor = new pc.Color(i1161[4], i1161[5], i1161[6], i1161[7])
  i1160.nearClipPlane = i1161[8]
  i1160.farClipPlane = i1161[9]
  i1160.fieldOfView = i1161[10]
  i1160.depth = i1161[11]
  i1160.clearFlags = i1161[12]
  i1160.cullingMask = i1161[13]
  i1160.rect = i1161[14]
  request.r(i1161[15], i1161[16], 0, i1160, 'targetTexture')
  i1160.usePhysicalProperties = !!i1161[17]
  i1160.focalLength = i1161[18]
  i1160.sensorSize = new pc.Vec2( i1161[19], i1161[20] )
  i1160.lensShift = new pc.Vec2( i1161[21], i1161[22] )
  i1160.gateFit = i1161[23]
  i1160.commandBufferCount = i1161[24]
  i1160.cameraType = i1161[25]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1163 = data
  i1162.pivot = new pc.Vec2( i1163[0], i1163[1] )
  i1162.anchorMin = new pc.Vec2( i1163[2], i1163[3] )
  i1162.anchorMax = new pc.Vec2( i1163[4], i1163[5] )
  i1162.sizeDelta = new pc.Vec2( i1163[6], i1163[7] )
  i1162.anchoredPosition3D = new pc.Vec3( i1163[8], i1163[9], i1163[10] )
  i1162.rotation = new pc.Quat(i1163[11], i1163[12], i1163[13], i1163[14])
  i1162.scale = new pc.Vec3( i1163[15], i1163[16], i1163[17] )
  return i1162
}

Deserializers["BuildGrid"] = function (request, data, root) {
  var i1164 = root || request.c( 'BuildGrid' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1164.cells = i1166
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1171 = data
  i1170.ambientIntensity = i1171[0]
  i1170.reflectionIntensity = i1171[1]
  i1170.ambientMode = i1171[2]
  i1170.ambientLight = new pc.Color(i1171[3], i1171[4], i1171[5], i1171[6])
  i1170.ambientSkyColor = new pc.Color(i1171[7], i1171[8], i1171[9], i1171[10])
  i1170.ambientGroundColor = new pc.Color(i1171[11], i1171[12], i1171[13], i1171[14])
  i1170.ambientEquatorColor = new pc.Color(i1171[15], i1171[16], i1171[17], i1171[18])
  i1170.fogColor = new pc.Color(i1171[19], i1171[20], i1171[21], i1171[22])
  i1170.fogEndDistance = i1171[23]
  i1170.fogStartDistance = i1171[24]
  i1170.fogDensity = i1171[25]
  i1170.fog = !!i1171[26]
  request.r(i1171[27], i1171[28], 0, i1170, 'skybox')
  i1170.fogMode = i1171[29]
  var i1173 = i1171[30]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1173[i + 0]) );
  }
  i1170.lightmaps = i1172
  i1170.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1171[31], i1170.lightProbes)
  i1170.lightmapsMode = i1171[32]
  i1170.mixedBakeMode = i1171[33]
  i1170.environmentLightingMode = i1171[34]
  i1170.ambientProbe = new pc.SphericalHarmonicsL2(i1171[35])
  i1170.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1171[36])
  i1170.useReferenceAmbientProbe = !!i1171[37]
  request.r(i1171[38], i1171[39], 0, i1170, 'customReflection')
  request.r(i1171[40], i1171[41], 0, i1170, 'defaultReflection')
  i1170.defaultReflectionMode = i1171[42]
  i1170.defaultReflectionResolution = i1171[43]
  i1170.sunLightObjectId = i1171[44]
  i1170.pixelLightCount = i1171[45]
  i1170.defaultReflectionHDR = !!i1171[46]
  i1170.hasLightDataAsset = !!i1171[47]
  i1170.hasManualGenerate = !!i1171[48]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'lightmapColor')
  request.r(i1177[2], i1177[3], 0, i1176, 'lightmapDirection')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1178 = root || new UnityEngine.LightProbes()
  var i1179 = data
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1187 = data
  var i1189 = i1187[0]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1189[i + 0]));
  }
  i1186.ShaderCompilationErrors = i1188
  i1186.name = i1187[1]
  i1186.guid = i1187[2]
  var i1191 = i1187[3]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( i1191[i + 0] );
  }
  i1186.shaderDefinedKeywords = i1190
  var i1193 = i1187[4]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1193[i + 0]) );
  }
  i1186.passes = i1192
  var i1195 = i1187[5]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1195[i + 0]) );
  }
  i1186.usePasses = i1194
  var i1197 = i1187[6]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1197[i + 0]) );
  }
  i1186.defaultParameterValues = i1196
  request.r(i1187[7], i1187[8], 0, i1186, 'unityFallbackShader')
  i1186.readDepth = !!i1187[9]
  i1186.isCreatedByShaderGraph = !!i1187[10]
  i1186.compiled = !!i1187[11]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1201 = data
  i1200.shaderName = i1201[0]
  i1200.errorMessage = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1206 = root || new pc.UnityShaderPass()
  var i1207 = data
  i1206.id = i1207[0]
  i1206.subShaderIndex = i1207[1]
  i1206.name = i1207[2]
  i1206.passType = i1207[3]
  i1206.grabPassTextureName = i1207[4]
  i1206.usePass = !!i1207[5]
  i1206.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[6], i1206.zTest)
  i1206.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[7], i1206.zWrite)
  i1206.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[8], i1206.culling)
  i1206.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1207[9], i1206.blending)
  i1206.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1207[10], i1206.alphaBlending)
  i1206.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[11], i1206.colorWriteMask)
  i1206.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[12], i1206.offsetUnits)
  i1206.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[13], i1206.offsetFactor)
  i1206.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[14], i1206.stencilRef)
  i1206.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[15], i1206.stencilReadMask)
  i1206.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1207[16], i1206.stencilWriteMask)
  i1206.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1207[17], i1206.stencilOp)
  i1206.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1207[18], i1206.stencilOpFront)
  i1206.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1207[19], i1206.stencilOpBack)
  var i1209 = i1207[20]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1209[i + 0]) );
  }
  i1206.tags = i1208
  var i1211 = i1207[21]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( i1211[i + 0] );
  }
  i1206.passDefinedKeywords = i1210
  var i1213 = i1207[22]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1213[i + 0]) );
  }
  i1206.passDefinedKeywordGroups = i1212
  var i1215 = i1207[23]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1215[i + 0]) );
  }
  i1206.variants = i1214
  var i1217 = i1207[24]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1217[i + 0]) );
  }
  i1206.excludedVariants = i1216
  i1206.hasDepthReader = !!i1207[25]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1219 = data
  i1218.val = i1219[0]
  i1218.name = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1221 = data
  i1220.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[0], i1220.src)
  i1220.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[1], i1220.dst)
  i1220.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1221[2], i1220.op)
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1223 = data
  i1222.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[0], i1222.pass)
  i1222.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[1], i1222.fail)
  i1222.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[2], i1222.zFail)
  i1222.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[3], i1222.comp)
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.value = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( i1233[i + 0] );
  }
  i1230.keywords = i1232
  i1230.hasDiscard = !!i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1237 = data
  i1236.passId = i1237[0]
  i1236.subShaderIndex = i1237[1]
  var i1239 = i1237[2]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( i1239[i + 0] );
  }
  i1236.keywords = i1238
  i1236.vertexProgram = i1237[3]
  i1236.fragmentProgram = i1237[4]
  i1236.exportedForWebGl2 = !!i1237[5]
  i1236.readDepth = !!i1237[6]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1243 = data
  request.r(i1243[0], i1243[1], 0, i1242, 'shader')
  i1242.pass = i1243[2]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1247 = data
  i1246.name = i1247[0]
  i1246.type = i1247[1]
  i1246.value = new pc.Vec4( i1247[2], i1247[3], i1247[4], i1247[5] )
  i1246.textureValue = i1247[6]
  i1246.shaderPropertyFlag = i1247[7]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1249 = data
  var i1251 = i1249[0]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1251[i + 0]) );
  }
  i1248.files = i1250
  i1248.componentToPrefabIds = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1255 = data
  i1254.path = i1255[0]
  request.r(i1255[1], i1255[2], 0, i1254, 'unityObject')
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1257 = data
  var i1259 = i1257[0]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1259[i + 0]) );
  }
  i1256.scriptsExecutionOrder = i1258
  var i1261 = i1257[1]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1261[i + 0]) );
  }
  i1256.sortingLayers = i1260
  var i1263 = i1257[2]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1263[i + 0]) );
  }
  i1256.cullingLayers = i1262
  i1256.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1257[3], i1256.timeSettings)
  i1256.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1257[4], i1256.physicsSettings)
  i1256.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1257[5], i1256.physics2DSettings)
  i1256.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1257[6], i1256.qualitySettings)
  i1256.enableRealtimeShadows = !!i1257[7]
  i1256.enableAutoInstancing = !!i1257[8]
  i1256.enableDynamicBatching = !!i1257[9]
  i1256.lightmapEncodingQuality = i1257[10]
  i1256.desiredColorSpace = i1257[11]
  var i1265 = i1257[12]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1256.allTags = i1264
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.value = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1273 = data
  i1272.id = i1273[0]
  i1272.name = i1273[1]
  i1272.value = i1273[2]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1277 = data
  i1276.id = i1277[0]
  i1276.name = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1279 = data
  i1278.fixedDeltaTime = i1279[0]
  i1278.maximumDeltaTime = i1279[1]
  i1278.timeScale = i1279[2]
  i1278.maximumParticleTimestep = i1279[3]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1281 = data
  i1280.gravity = new pc.Vec3( i1281[0], i1281[1], i1281[2] )
  i1280.defaultSolverIterations = i1281[3]
  i1280.bounceThreshold = i1281[4]
  i1280.autoSyncTransforms = !!i1281[5]
  i1280.autoSimulation = !!i1281[6]
  var i1283 = i1281[7]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1283[i + 0]) );
  }
  i1280.collisionMatrix = i1282
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1287 = data
  i1286.enabled = !!i1287[0]
  i1286.layerId = i1287[1]
  i1286.otherLayerId = i1287[2]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1289 = data
  request.r(i1289[0], i1289[1], 0, i1288, 'material')
  i1288.gravity = new pc.Vec2( i1289[2], i1289[3] )
  i1288.positionIterations = i1289[4]
  i1288.velocityIterations = i1289[5]
  i1288.velocityThreshold = i1289[6]
  i1288.maxLinearCorrection = i1289[7]
  i1288.maxAngularCorrection = i1289[8]
  i1288.maxTranslationSpeed = i1289[9]
  i1288.maxRotationSpeed = i1289[10]
  i1288.baumgarteScale = i1289[11]
  i1288.baumgarteTOIScale = i1289[12]
  i1288.timeToSleep = i1289[13]
  i1288.linearSleepTolerance = i1289[14]
  i1288.angularSleepTolerance = i1289[15]
  i1288.defaultContactOffset = i1289[16]
  i1288.autoSimulation = !!i1289[17]
  i1288.queriesHitTriggers = !!i1289[18]
  i1288.queriesStartInColliders = !!i1289[19]
  i1288.callbacksOnDisable = !!i1289[20]
  i1288.reuseCollisionCallbacks = !!i1289[21]
  i1288.autoSyncTransforms = !!i1289[22]
  var i1291 = i1289[23]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1291[i + 0]) );
  }
  i1288.collisionMatrix = i1290
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1295 = data
  i1294.enabled = !!i1295[0]
  i1294.layerId = i1295[1]
  i1294.otherLayerId = i1295[2]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1299[i + 0]) );
  }
  i1296.qualityLevels = i1298
  var i1301 = i1297[1]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( i1301[i + 0] );
  }
  i1296.names = i1300
  i1296.shadows = i1297[2]
  i1296.anisotropicFiltering = i1297[3]
  i1296.antiAliasing = i1297[4]
  i1296.lodBias = i1297[5]
  i1296.shadowCascades = i1297[6]
  i1296.shadowDistance = i1297[7]
  i1296.shadowmaskMode = i1297[8]
  i1296.shadowProjection = i1297[9]
  i1296.shadowResolution = i1297[10]
  i1296.softParticles = !!i1297[11]
  i1296.softVegetation = !!i1297[12]
  i1296.activeColorSpace = i1297[13]
  i1296.desiredColorSpace = i1297[14]
  i1296.masterTextureLimit = i1297[15]
  i1296.maxQueuedFrames = i1297[16]
  i1296.particleRaycastBudget = i1297[17]
  i1296.pixelLightCount = i1297[18]
  i1296.realtimeReflectionProbes = !!i1297[19]
  i1296.shadowCascade2Split = i1297[20]
  i1296.shadowCascade4Split = new pc.Vec3( i1297[21], i1297[22], i1297[23] )
  i1296.streamingMipmapsActive = !!i1297[24]
  i1296.vSyncCount = i1297[25]
  i1296.asyncUploadBufferSize = i1297[26]
  i1296.asyncUploadTimeSlice = i1297[27]
  i1296.billboardsFaceCameraPosition = !!i1297[28]
  i1296.shadowNearPlaneOffset = i1297[29]
  i1296.streamingMipmapsMemoryBudget = i1297[30]
  i1296.maximumLODLevel = i1297[31]
  i1296.streamingMipmapsAddAllCameras = !!i1297[32]
  i1296.streamingMipmapsMaxLevelReduction = i1297[33]
  i1296.streamingMipmapsRenderersPerFrame = i1297[34]
  i1296.resolutionScalingFixedDPIFactor = i1297[35]
  i1296.streamingMipmapsMaxFileIORequests = i1297[36]
  i1296.currentQualityLevel = i1297[37]
  return i1296
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"12":[13],"14":[13],"15":[13],"16":[13],"17":[13],"18":[13],"19":[20],"21":[8],"22":[23],"24":[23],"25":[23],"26":[23],"27":[23],"28":[23],"29":[23],"30":[6],"31":[6],"32":[6],"33":[6],"34":[6],"35":[6],"36":[6],"37":[6],"38":[6],"39":[6],"40":[6],"41":[6],"42":[6],"43":[8],"44":[45],"46":[47],"48":[47],"49":[11],"50":[51],"52":[2],"53":[51],"54":[11],"55":[11],"56":[49],"57":[58,11],"59":[11],"60":[49],"61":[11],"62":[11],"63":[11],"64":[11],"65":[11],"66":[11],"67":[11],"68":[11],"69":[11],"70":[58,11],"71":[11],"72":[11],"73":[11],"74":[11],"75":[58,11],"76":[11],"77":[78],"79":[78],"80":[78],"81":[78],"82":[8],"83":[8],"84":[85],"86":[8],"87":[51]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","Build","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","BuildGrid","UnityEngine.RectTransform","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

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

Deserializers.buildID = "394a4192-96ed-4405-8c96-8664beb5b416";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

