var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointSpring' )
  var i259 = data
  i258.spring = i259[0]
  i258.damper = i259[1]
  i258.targetPosition = i259[2]
  return i258
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointMotor' )
  var i261 = data
  i260.m_TargetVelocity = i261[0]
  i260.m_Force = i261[1]
  i260.m_FreeSpin = i261[2]
  return i260
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.JointLimits' )
  var i263 = data
  i262.m_Min = i263[0]
  i262.m_Max = i263[1]
  i262.m_Bounciness = i263[2]
  i262.m_BounceMinVelocity = i263[3]
  i262.m_ContactDistance = i263[4]
  i262.minBounce = i263[5]
  i262.maxBounce = i263[6]
  return i262
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointDrive' )
  var i265 = data
  i264.m_PositionSpring = i265[0]
  i264.m_PositionDamper = i265[1]
  i264.m_MaximumForce = i265[2]
  i264.m_UseAcceleration = i265[3]
  return i264
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i267 = data
  i266.m_Spring = i267[0]
  i266.m_Damper = i267[1]
  return i266
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i269 = data
  i268.m_Limit = i269[0]
  i268.m_Bounciness = i269[1]
  i268.m_ContactDistance = i269[2]
  return i268
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i271 = data
  i270.m_ExtremumSlip = i271[0]
  i270.m_ExtremumValue = i271[1]
  i270.m_AsymptoteSlip = i271[2]
  i270.m_AsymptoteValue = i271[3]
  i270.m_Stiffness = i271[4]
  return i270
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i273 = data
  i272.m_LowerAngle = i273[0]
  i272.m_UpperAngle = i273[1]
  return i272
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i275 = data
  i274.m_MotorSpeed = i275[0]
  i274.m_MaximumMotorTorque = i275[1]
  return i274
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i277 = data
  i276.m_DampingRatio = i277[0]
  i276.m_Frequency = i277[1]
  i276.m_Angle = i277[2]
  return i276
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i279 = data
  i278.m_LowerTranslation = i279[0]
  i278.m_UpperTranslation = i279[1]
  return i278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i280 = root || new pc.UnityMaterial()
  var i281 = data
  i280.name = i281[0]
  request.r(i281[1], i281[2], 0, i280, 'shader')
  i280.renderQueue = i281[3]
  i280.enableInstancing = !!i281[4]
  var i283 = i281[5]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i283[i + 0]) );
  }
  i280.floatParameters = i282
  var i285 = i281[6]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i285[i + 0]) );
  }
  i280.colorParameters = i284
  var i287 = i281[7]
  var i286 = []
  for(var i = 0; i < i287.length; i += 1) {
    i286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i287[i + 0]) );
  }
  i280.vectorParameters = i286
  var i289 = i281[8]
  var i288 = []
  for(var i = 0; i < i289.length; i += 1) {
    i288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i289[i + 0]) );
  }
  i280.textureParameters = i288
  var i291 = i281[9]
  var i290 = []
  for(var i = 0; i < i291.length; i += 1) {
    i290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i291[i + 0]) );
  }
  i280.materialFlags = i290
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i295 = data
  i294.name = i295[0]
  i294.value = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i299 = data
  i298.name = i299[0]
  i298.value = new pc.Color(i299[1], i299[2], i299[3], i299[4])
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i303 = data
  i302.name = i303[0]
  i302.value = new pc.Vec4( i303[1], i303[2], i303[3], i303[4] )
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i307 = data
  i306.name = i307[0]
  request.r(i307[1], i307[2], 0, i306, 'value')
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i311 = data
  i310.name = i311[0]
  i310.enabled = !!i311[1]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i313 = data
  i312.name = i313[0]
  i312.width = i313[1]
  i312.height = i313[2]
  i312.mipmapCount = i313[3]
  i312.anisoLevel = i313[4]
  i312.filterMode = i313[5]
  i312.hdr = !!i313[6]
  i312.format = i313[7]
  i312.wrapMode = i313[8]
  i312.alphaIsTransparency = !!i313[9]
  i312.alphaSource = i313[10]
  i312.graphicsFormat = i313[11]
  i312.sRGBTexture = !!i313[12]
  i312.desiredColorSpace = i313[13]
  i312.wrapU = i313[14]
  i312.wrapV = i313[15]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i315 = data
  i314.position = new pc.Vec3( i315[0], i315[1], i315[2] )
  i314.scale = new pc.Vec3( i315[3], i315[4], i315[5] )
  i314.rotation = new pc.Quat(i315[6], i315[7], i315[8], i315[9])
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i317 = data
  i316.enabled = !!i317[0]
  request.r(i317[1], i317[2], 0, i316, 'sharedMaterial')
  var i319 = i317[3]
  var i318 = []
  for(var i = 0; i < i319.length; i += 2) {
  request.r(i319[i + 0], i319[i + 1], 2, i318, '')
  }
  i316.sharedMaterials = i318
  i316.receiveShadows = !!i317[4]
  i316.shadowCastingMode = i317[5]
  i316.sortingLayerID = i317[6]
  i316.sortingOrder = i317[7]
  i316.lightmapIndex = i317[8]
  i316.lightmapSceneIndex = i317[9]
  i316.lightmapScaleOffset = new pc.Vec4( i317[10], i317[11], i317[12], i317[13] )
  i316.lightProbeUsage = i317[14]
  i316.reflectionProbeUsage = i317[15]
  i316.color = new pc.Color(i317[16], i317[17], i317[18], i317[19])
  request.r(i317[20], i317[21], 0, i316, 'sprite')
  i316.flipX = !!i317[22]
  i316.flipY = !!i317[23]
  i316.drawMode = i317[24]
  i316.size = new pc.Vec2( i317[25], i317[26] )
  i316.tileMode = i317[27]
  i316.adaptiveModeThreshold = i317[28]
  i316.maskInteraction = i317[29]
  i316.spriteSortPoint = i317[30]
  return i316
}

Deserializers["Build"] = function (request, data, root) {
  var i322 = root || request.c( 'Build' )
  var i323 = data
  i322.isMovable = !!i323[0]
  request.r(i323[1], i323[2], 0, i322, 'buildGrid')
  request.r(i323[3], i323[4], 0, i322, 'buildPrefab')
  i322.snapSpeed = i323[5]
  i322.mergeSpeed = i323[6]
  i322.buildingLevel = i323[7]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i325 = data
  i324.radius = i325[0]
  i324.enabled = !!i325[1]
  i324.isTrigger = !!i325[2]
  i324.usedByEffector = !!i325[3]
  i324.density = i325[4]
  i324.offset = new pc.Vec2( i325[5], i325[6] )
  request.r(i325[7], i325[8], 0, i324, 'material')
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i327 = data
  i326.name = i327[0]
  i326.tagId = i327[1]
  i326.enabled = !!i327[2]
  i326.isStatic = !!i327[3]
  i326.layer = i327[4]
  return i326
}

Deserializers["FinalMerge"] = function (request, data, root) {
  var i328 = root || request.c( 'FinalMerge' )
  var i329 = data
  request.r(i329[0], i329[1], 0, i328, 'targetObject')
  request.r(i329[2], i329[3], 0, i328, 'cameraFollow')
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i331 = data
  i330.name = i331[0]
  i330.index = i331[1]
  i330.startup = !!i331[2]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i333 = data
  i332.enabled = !!i333[0]
  i332.aspect = i333[1]
  i332.orthographic = !!i333[2]
  i332.orthographicSize = i333[3]
  i332.backgroundColor = new pc.Color(i333[4], i333[5], i333[6], i333[7])
  i332.nearClipPlane = i333[8]
  i332.farClipPlane = i333[9]
  i332.fieldOfView = i333[10]
  i332.depth = i333[11]
  i332.clearFlags = i333[12]
  i332.cullingMask = i333[13]
  i332.rect = i333[14]
  request.r(i333[15], i333[16], 0, i332, 'targetTexture')
  i332.usePhysicalProperties = !!i333[17]
  i332.focalLength = i333[18]
  i332.sensorSize = new pc.Vec2( i333[19], i333[20] )
  i332.lensShift = new pc.Vec2( i333[21], i333[22] )
  i332.gateFit = i333[23]
  i332.commandBufferCount = i333[24]
  i332.cameraType = i333[25]
  return i332
}

Deserializers["CameraMoving"] = function (request, data, root) {
  var i334 = root || request.c( 'CameraMoving' )
  var i335 = data
  i334.moveSpeed = i335[0]
  i334.offset = new pc.Vec3( i335[1], i335[2], i335[3] )
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i337 = data
  i336.pivot = new pc.Vec2( i337[0], i337[1] )
  i336.anchorMin = new pc.Vec2( i337[2], i337[3] )
  i336.anchorMax = new pc.Vec2( i337[4], i337[5] )
  i336.sizeDelta = new pc.Vec2( i337[6], i337[7] )
  i336.anchoredPosition3D = new pc.Vec3( i337[8], i337[9], i337[10] )
  i336.rotation = new pc.Quat(i337[11], i337[12], i337[13], i337[14])
  i336.scale = new pc.Vec3( i337[15], i337[16], i337[17] )
  return i336
}

Deserializers["BuildGrid"] = function (request, data, root) {
  var i338 = root || request.c( 'BuildGrid' )
  var i339 = data
  var i341 = i339[0]
  var i340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i341.length; i += 2) {
  request.r(i341[i + 0], i341[i + 1], 1, i340, '')
  }
  i338.cells = i340
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i345 = data
  request.r(i345[0], i345[1], 0, i344, 'clip')
  request.r(i345[2], i345[3], 0, i344, 'outputAudioMixerGroup')
  i344.playOnAwake = !!i345[4]
  i344.loop = !!i345[5]
  i344.time = i345[6]
  i344.volume = i345[7]
  i344.pitch = i345[8]
  i344.enabled = !!i345[9]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i347 = data
  i346.enabled = !!i347[0]
  i346.planeDistance = i347[1]
  i346.referencePixelsPerUnit = i347[2]
  i346.isFallbackOverlay = !!i347[3]
  i346.renderMode = i347[4]
  i346.renderOrder = i347[5]
  i346.sortingLayerName = i347[6]
  i346.sortingOrder = i347[7]
  i346.scaleFactor = i347[8]
  request.r(i347[9], i347[10], 0, i346, 'worldCamera')
  i346.overrideSorting = !!i347[11]
  i346.pixelPerfect = !!i347[12]
  i346.targetDisplay = i347[13]
  i346.overridePixelPerfect = !!i347[14]
  return i346
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i349 = data
  i348.m_UiScaleMode = i349[0]
  i348.m_ReferencePixelsPerUnit = i349[1]
  i348.m_ScaleFactor = i349[2]
  i348.m_ReferenceResolution = new pc.Vec2( i349[3], i349[4] )
  i348.m_ScreenMatchMode = i349[5]
  i348.m_MatchWidthOrHeight = i349[6]
  i348.m_PhysicalUnit = i349[7]
  i348.m_FallbackScreenDPI = i349[8]
  i348.m_DefaultSpriteDPI = i349[9]
  i348.m_DynamicPixelsPerUnit = i349[10]
  i348.m_PresetInfoIsWorld = !!i349[11]
  return i348
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i351 = data
  i350.m_IgnoreReversedGraphics = !!i351[0]
  i350.m_BlockingObjects = i351[1]
  i350.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i351[2] )
  return i350
}

Deserializers["Stage2Animation"] = function (request, data, root) {
  var i352 = root || request.c( 'Stage2Animation' )
  var i353 = data
  var i355 = i353[0]
  var i354 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i355.length; i += 2) {
  request.r(i355[i + 0], i355[i + 1], 1, i354, '')
  }
  i352.objectsToAppear = i354
  i352.appearDelay = i353[1]
  i352.appearRiseDistance = i353[2]
  i352.appearDuration = i353[3]
  var i357 = i353[4]
  var i356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i357.length; i += 2) {
  request.r(i357[i + 0], i357[i + 1], 1, i356, '')
  }
  i352.objectsToDisappear = i356
  i352.disappearDelay = i353[5]
  i352.disappearRiseDistance = i353[6]
  i352.disappearDuration = i353[7]
  return i352
}

Deserializers["FadeScreen"] = function (request, data, root) {
  var i360 = root || request.c( 'FadeScreen' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'fadePanel')
  i360.fadeDuration = i361[2]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i363 = data
  i362.cullTransparentMesh = !!i363[0]
  return i362
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.UI.Image' )
  var i365 = data
  request.r(i365[0], i365[1], 0, i364, 'm_Sprite')
  i364.m_Type = i365[2]
  i364.m_PreserveAspect = !!i365[3]
  i364.m_FillCenter = !!i365[4]
  i364.m_FillMethod = i365[5]
  i364.m_FillAmount = i365[6]
  i364.m_FillClockwise = !!i365[7]
  i364.m_FillOrigin = i365[8]
  i364.m_UseSpriteMesh = !!i365[9]
  i364.m_PixelsPerUnitMultiplier = i365[10]
  request.r(i365[11], i365[12], 0, i364, 'm_Material')
  i364.m_Maskable = !!i365[13]
  i364.m_Color = new pc.Color(i365[14], i365[15], i365[16], i365[17])
  i364.m_RaycastTarget = !!i365[18]
  i364.m_RaycastPadding = new pc.Vec4( i365[19], i365[20], i365[21], i365[22] )
  return i364
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i367 = data
  request.r(i367[0], i367[1], 0, i366, 'm_FirstSelected')
  i366.m_sendNavigationEvents = !!i367[2]
  i366.m_DragThreshold = i367[3]
  return i366
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i369 = data
  i368.m_HorizontalAxis = i369[0]
  i368.m_VerticalAxis = i369[1]
  i368.m_SubmitButton = i369[2]
  i368.m_CancelButton = i369[3]
  i368.m_InputActionsPerSecond = i369[4]
  i368.m_RepeatDelay = i369[5]
  i368.m_ForceModuleActive = !!i369[6]
  i368.m_SendPointerHoverToParent = !!i369[7]
  return i368
}

Deserializers["Handle"] = function (request, data, root) {
  var i370 = root || request.c( 'Handle' )
  var i371 = data
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i373 = data
  i372.ambientIntensity = i373[0]
  i372.reflectionIntensity = i373[1]
  i372.ambientMode = i373[2]
  i372.ambientLight = new pc.Color(i373[3], i373[4], i373[5], i373[6])
  i372.ambientSkyColor = new pc.Color(i373[7], i373[8], i373[9], i373[10])
  i372.ambientGroundColor = new pc.Color(i373[11], i373[12], i373[13], i373[14])
  i372.ambientEquatorColor = new pc.Color(i373[15], i373[16], i373[17], i373[18])
  i372.fogColor = new pc.Color(i373[19], i373[20], i373[21], i373[22])
  i372.fogEndDistance = i373[23]
  i372.fogStartDistance = i373[24]
  i372.fogDensity = i373[25]
  i372.fog = !!i373[26]
  request.r(i373[27], i373[28], 0, i372, 'skybox')
  i372.fogMode = i373[29]
  var i375 = i373[30]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i375[i + 0]) );
  }
  i372.lightmaps = i374
  i372.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i373[31], i372.lightProbes)
  i372.lightmapsMode = i373[32]
  i372.mixedBakeMode = i373[33]
  i372.environmentLightingMode = i373[34]
  i372.ambientProbe = new pc.SphericalHarmonicsL2(i373[35])
  i372.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i373[36])
  i372.useReferenceAmbientProbe = !!i373[37]
  request.r(i373[38], i373[39], 0, i372, 'customReflection')
  request.r(i373[40], i373[41], 0, i372, 'defaultReflection')
  i372.defaultReflectionMode = i373[42]
  i372.defaultReflectionResolution = i373[43]
  i372.sunLightObjectId = i373[44]
  i372.pixelLightCount = i373[45]
  i372.defaultReflectionHDR = !!i373[46]
  i372.hasLightDataAsset = !!i373[47]
  i372.hasManualGenerate = !!i373[48]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i379 = data
  request.r(i379[0], i379[1], 0, i378, 'lightmapColor')
  request.r(i379[2], i379[3], 0, i378, 'lightmapDirection')
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i380 = root || new UnityEngine.LightProbes()
  var i381 = data
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i389 = data
  var i391 = i389[0]
  var i390 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i391.length; i += 1) {
    i390.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i391[i + 0]));
  }
  i388.ShaderCompilationErrors = i390
  i388.name = i389[1]
  i388.guid = i389[2]
  var i393 = i389[3]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( i393[i + 0] );
  }
  i388.shaderDefinedKeywords = i392
  var i395 = i389[4]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i395[i + 0]) );
  }
  i388.passes = i394
  var i397 = i389[5]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i397[i + 0]) );
  }
  i388.usePasses = i396
  var i399 = i389[6]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i399[i + 0]) );
  }
  i388.defaultParameterValues = i398
  request.r(i389[7], i389[8], 0, i388, 'unityFallbackShader')
  i388.readDepth = !!i389[9]
  i388.isCreatedByShaderGraph = !!i389[10]
  i388.compiled = !!i389[11]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i403 = data
  i402.shaderName = i403[0]
  i402.errorMessage = i403[1]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i408 = root || new pc.UnityShaderPass()
  var i409 = data
  i408.id = i409[0]
  i408.subShaderIndex = i409[1]
  i408.name = i409[2]
  i408.passType = i409[3]
  i408.grabPassTextureName = i409[4]
  i408.usePass = !!i409[5]
  i408.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[6], i408.zTest)
  i408.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[7], i408.zWrite)
  i408.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[8], i408.culling)
  i408.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i409[9], i408.blending)
  i408.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i409[10], i408.alphaBlending)
  i408.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[11], i408.colorWriteMask)
  i408.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[12], i408.offsetUnits)
  i408.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[13], i408.offsetFactor)
  i408.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[14], i408.stencilRef)
  i408.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[15], i408.stencilReadMask)
  i408.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[16], i408.stencilWriteMask)
  i408.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i409[17], i408.stencilOp)
  i408.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i409[18], i408.stencilOpFront)
  i408.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i409[19], i408.stencilOpBack)
  var i411 = i409[20]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i411[i + 0]) );
  }
  i408.tags = i410
  var i413 = i409[21]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( i413[i + 0] );
  }
  i408.passDefinedKeywords = i412
  var i415 = i409[22]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i415[i + 0]) );
  }
  i408.passDefinedKeywordGroups = i414
  var i417 = i409[23]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i417[i + 0]) );
  }
  i408.variants = i416
  var i419 = i409[24]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i419[i + 0]) );
  }
  i408.excludedVariants = i418
  i408.hasDepthReader = !!i409[25]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i421 = data
  i420.val = i421[0]
  i420.name = i421[1]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i423 = data
  i422.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[0], i422.src)
  i422.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[1], i422.dst)
  i422.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[2], i422.op)
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i425 = data
  i424.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i425[0], i424.pass)
  i424.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i425[1], i424.fail)
  i424.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i425[2], i424.zFail)
  i424.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i425[3], i424.comp)
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i429 = data
  i428.name = i429[0]
  i428.value = i429[1]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i433 = data
  var i435 = i433[0]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( i435[i + 0] );
  }
  i432.keywords = i434
  i432.hasDiscard = !!i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i439 = data
  i438.passId = i439[0]
  i438.subShaderIndex = i439[1]
  var i441 = i439[2]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( i441[i + 0] );
  }
  i438.keywords = i440
  i438.vertexProgram = i439[3]
  i438.fragmentProgram = i439[4]
  i438.exportedForWebGl2 = !!i439[5]
  i438.readDepth = !!i439[6]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i445 = data
  request.r(i445[0], i445[1], 0, i444, 'shader')
  i444.pass = i445[2]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i449 = data
  i448.name = i449[0]
  i448.type = i449[1]
  i448.value = new pc.Vec4( i449[2], i449[3], i449[4], i449[5] )
  i448.textureValue = i449[6]
  i448.shaderPropertyFlag = i449[7]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'texture')
  i450.aabb = i451[3]
  i450.vertices = i451[4]
  i450.triangles = i451[5]
  i450.textureRect = UnityEngine.Rect.MinMaxRect(i451[6], i451[7], i451[8], i451[9])
  i450.packedRect = UnityEngine.Rect.MinMaxRect(i451[10], i451[11], i451[12], i451[13])
  i450.border = new pc.Vec4( i451[14], i451[15], i451[16], i451[17] )
  i450.transparency = i451[18]
  i450.bounds = i451[19]
  i450.pixelsPerUnit = i451[20]
  i450.textureWidth = i451[21]
  i450.textureHeight = i451[22]
  i450.nativeSize = new pc.Vec2( i451[23], i451[24] )
  i450.pivot = new pc.Vec2( i451[25], i451[26] )
  i450.textureRectOffset = new pc.Vec2( i451[27], i451[28] )
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i453 = data
  i452.name = i453[0]
  return i452
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i454 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i455 = data
  i454.useSafeMode = !!i455[0]
  i454.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i455[1], i454.safeModeOptions)
  i454.timeScale = i455[2]
  i454.useSmoothDeltaTime = !!i455[3]
  i454.maxSmoothUnscaledTime = i455[4]
  i454.rewindCallbackMode = i455[5]
  i454.showUnityEditorReport = !!i455[6]
  i454.logBehaviour = i455[7]
  i454.drawGizmos = !!i455[8]
  i454.defaultRecyclable = !!i455[9]
  i454.defaultAutoPlay = i455[10]
  i454.defaultUpdateType = i455[11]
  i454.defaultTimeScaleIndependent = !!i455[12]
  i454.defaultEaseType = i455[13]
  i454.defaultEaseOvershootOrAmplitude = i455[14]
  i454.defaultEasePeriod = i455[15]
  i454.defaultAutoKill = !!i455[16]
  i454.defaultLoopType = i455[17]
  i454.debugMode = !!i455[18]
  i454.debugStoreTargetId = !!i455[19]
  i454.showPreviewPanel = !!i455[20]
  i454.storeSettingsLocation = i455[21]
  i454.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i455[22], i454.modules)
  i454.createASMDEF = !!i455[23]
  i454.showPlayingTweens = !!i455[24]
  i454.showPausedTweens = !!i455[25]
  return i454
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i456 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i457 = data
  i456.logBehaviour = i457[0]
  i456.nestedTweenFailureBehaviour = i457[1]
  return i456
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i459 = data
  i458.showPanel = !!i459[0]
  i458.audioEnabled = !!i459[1]
  i458.physicsEnabled = !!i459[2]
  i458.physics2DEnabled = !!i459[3]
  i458.spriteEnabled = !!i459[4]
  i458.uiEnabled = !!i459[5]
  i458.textMeshProEnabled = !!i459[6]
  i458.tk2DEnabled = !!i459[7]
  i458.deAudioEnabled = !!i459[8]
  i458.deUnityExtendedEnabled = !!i459[9]
  i458.epoOutlineEnabled = !!i459[10]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i461 = data
  var i463 = i461[0]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i463[i + 0]) );
  }
  i460.files = i462
  i460.componentToPrefabIds = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i467 = data
  i466.path = i467[0]
  request.r(i467[1], i467[2], 0, i466, 'unityObject')
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i469 = data
  var i471 = i469[0]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i471[i + 0]) );
  }
  i468.scriptsExecutionOrder = i470
  var i473 = i469[1]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i473[i + 0]) );
  }
  i468.sortingLayers = i472
  var i475 = i469[2]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i475[i + 0]) );
  }
  i468.cullingLayers = i474
  i468.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i469[3], i468.timeSettings)
  i468.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i469[4], i468.physicsSettings)
  i468.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i469[5], i468.physics2DSettings)
  i468.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i469[6], i468.qualitySettings)
  i468.enableRealtimeShadows = !!i469[7]
  i468.enableAutoInstancing = !!i469[8]
  i468.enableDynamicBatching = !!i469[9]
  i468.lightmapEncodingQuality = i469[10]
  i468.desiredColorSpace = i469[11]
  var i477 = i469[12]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i468.allTags = i476
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i481 = data
  i480.name = i481[0]
  i480.value = i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i485 = data
  i484.id = i485[0]
  i484.name = i485[1]
  i484.value = i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i489 = data
  i488.id = i489[0]
  i488.name = i489[1]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i491 = data
  i490.fixedDeltaTime = i491[0]
  i490.maximumDeltaTime = i491[1]
  i490.timeScale = i491[2]
  i490.maximumParticleTimestep = i491[3]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i493 = data
  i492.gravity = new pc.Vec3( i493[0], i493[1], i493[2] )
  i492.defaultSolverIterations = i493[3]
  i492.bounceThreshold = i493[4]
  i492.autoSyncTransforms = !!i493[5]
  i492.autoSimulation = !!i493[6]
  var i495 = i493[7]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i495[i + 0]) );
  }
  i492.collisionMatrix = i494
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i499 = data
  i498.enabled = !!i499[0]
  i498.layerId = i499[1]
  i498.otherLayerId = i499[2]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'material')
  i500.gravity = new pc.Vec2( i501[2], i501[3] )
  i500.positionIterations = i501[4]
  i500.velocityIterations = i501[5]
  i500.velocityThreshold = i501[6]
  i500.maxLinearCorrection = i501[7]
  i500.maxAngularCorrection = i501[8]
  i500.maxTranslationSpeed = i501[9]
  i500.maxRotationSpeed = i501[10]
  i500.baumgarteScale = i501[11]
  i500.baumgarteTOIScale = i501[12]
  i500.timeToSleep = i501[13]
  i500.linearSleepTolerance = i501[14]
  i500.angularSleepTolerance = i501[15]
  i500.defaultContactOffset = i501[16]
  i500.autoSimulation = !!i501[17]
  i500.queriesHitTriggers = !!i501[18]
  i500.queriesStartInColliders = !!i501[19]
  i500.callbacksOnDisable = !!i501[20]
  i500.reuseCollisionCallbacks = !!i501[21]
  i500.autoSyncTransforms = !!i501[22]
  var i503 = i501[23]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i503[i + 0]) );
  }
  i500.collisionMatrix = i502
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i507 = data
  i506.enabled = !!i507[0]
  i506.layerId = i507[1]
  i506.otherLayerId = i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i509 = data
  var i511 = i509[0]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i511[i + 0]) );
  }
  i508.qualityLevels = i510
  var i513 = i509[1]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( i513[i + 0] );
  }
  i508.names = i512
  i508.shadows = i509[2]
  i508.anisotropicFiltering = i509[3]
  i508.antiAliasing = i509[4]
  i508.lodBias = i509[5]
  i508.shadowCascades = i509[6]
  i508.shadowDistance = i509[7]
  i508.shadowmaskMode = i509[8]
  i508.shadowProjection = i509[9]
  i508.shadowResolution = i509[10]
  i508.softParticles = !!i509[11]
  i508.softVegetation = !!i509[12]
  i508.activeColorSpace = i509[13]
  i508.desiredColorSpace = i509[14]
  i508.masterTextureLimit = i509[15]
  i508.maxQueuedFrames = i509[16]
  i508.particleRaycastBudget = i509[17]
  i508.pixelLightCount = i509[18]
  i508.realtimeReflectionProbes = !!i509[19]
  i508.shadowCascade2Split = i509[20]
  i508.shadowCascade4Split = new pc.Vec3( i509[21], i509[22], i509[23] )
  i508.streamingMipmapsActive = !!i509[24]
  i508.vSyncCount = i509[25]
  i508.asyncUploadBufferSize = i509[26]
  i508.asyncUploadTimeSlice = i509[27]
  i508.billboardsFaceCameraPosition = !!i509[28]
  i508.shadowNearPlaneOffset = i509[29]
  i508.streamingMipmapsMemoryBudget = i509[30]
  i508.maximumLODLevel = i509[31]
  i508.streamingMipmapsAddAllCameras = !!i509[32]
  i508.streamingMipmapsMaxLevelReduction = i509[33]
  i508.streamingMipmapsRenderersPerFrame = i509[34]
  i508.resolutionScalingFixedDPIFactor = i509[35]
  i508.streamingMipmapsMaxFileIORequests = i509[36]
  i508.currentQualityLevel = i509[37]
  return i508
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[10],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[10],"63":[64],"65":[66],"67":[66],"17":[13],"6":[68,2],"9":[6],"69":[70],"71":[2],"72":[70],"73":[13],"74":[13],"20":[17],"23":[24,13],"75":[13],"19":[17],"76":[13],"77":[13],"78":[13],"79":[13],"80":[13],"81":[13],"82":[13],"83":[13],"84":[13],"85":[24,13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[24,13],"91":[13],"92":[25],"93":[25],"26":[25],"94":[25],"95":[10],"96":[10],"97":[98],"99":[10],"100":[70]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Build","UnityEngine.GameObject","UnityEngine.CircleCollider2D","FinalMerge","UnityEngine.Camera","UnityEngine.AudioListener","CameraMoving","UnityEngine.RectTransform","BuildGrid","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","Stage2Animation","FadeScreen","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Handle","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.22f1";

Deserializers.productName = "PlayAble2D";

Deserializers.lunaInitializationTime = "03/18/2025 09:22:42";

<<<<<<< Updated upstream
Deserializers.lunaDaysRunning = "4.6";
=======
Deserializers.lunaDaysRunning = "0.0";
>>>>>>> Stashed changes

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1760";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2946";

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

<<<<<<< Updated upstream
Deserializers.buildID = "6c25bb33-67bc-4778-aca0-c42a5eac86e2";
=======
Deserializers.buildID = "6255b5e2-0695-44de-ac55-6538f69025e6";
>>>>>>> Stashed changes

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

