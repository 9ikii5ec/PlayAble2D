if ( TRACE ) { TRACE( JSON.parse( '["Build#init","Build#Awake","Build#Update","Build#OnMouseDown","Build#OnMouseDrag","Build#OnMouseUp","Build#SnapToCell","Build#IsCellOccupied","Build#GetMouseWorldPosition","BuildGrid#CellPositions#get"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*Build start.*/
    Bridge.define("Build", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            buildGrid: null,
            snapSpeed: 0,
            offset: null,
            isDragging: false,
            originalPosition: null,
            targetPosition: null,
            isSnapping: false,
            spriteRenderer: null,
            originalSortingOrder: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Build#init", this ); }

                this.offset = new UnityEngine.Vector3();
                this.originalPosition = new UnityEngine.Vector2();
                this.targetPosition = new UnityEngine.Vector3();
                this.snapSpeed = 10.0;
                this.isDragging = false;
                this.isSnapping = false;
            }
        },
        methods: {
            /*Build.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "Build#Awake", this ); }

                this.originalPosition = UnityEngine.Vector2.FromVector3(this.transform.position.$clone());
                this.targetPosition = this.transform.position.$clone();
                this.spriteRenderer = this.GetComponent(UnityEngine.SpriteRenderer);
                this.originalSortingOrder = this.spriteRenderer.sortingOrder;
            },
            /*Build.Awake end.*/

            /*Build.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "Build#Update", this ); }

                if (this.isSnapping) {
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, this.targetPosition, this.snapSpeed * UnityEngine.Time.deltaTime );
                    if (pc.Vec3.distance( this.transform.position, this.targetPosition ) < 0.01) {
                        this.transform.position = this.targetPosition.$clone();
                        this.isSnapping = false;
                    }
                }
            },
            /*Build.Update end.*/

            /*Build.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "Build#OnMouseDown", this ); }

                var $t;
                this.offset = this.transform.position.$clone().sub( this.GetMouseWorldPosition() );
                this.isDragging = true;
                this.originalSortingOrder = this.spriteRenderer.sortingOrder;
                ($t = this.spriteRenderer).sortingOrder = ($t.sortingOrder + 1) | 0;
                this.isSnapping = false;
            },
            /*Build.OnMouseDown end.*/

            /*Build.OnMouseDrag start.*/
            OnMouseDrag: function () {
if ( TRACE ) { TRACE( "Build#OnMouseDrag", this ); }

                this.transform.position = this.GetMouseWorldPosition().add( this.offset );
            },
            /*Build.OnMouseDrag end.*/

            /*Build.OnMouseUp start.*/
            OnMouseUp: function () {
if ( TRACE ) { TRACE( "Build#OnMouseUp", this ); }

                this.isDragging = false;
                this.SnapToCell();
                this.spriteRenderer.sortingOrder = this.originalSortingOrder;
            },
            /*Build.OnMouseUp end.*/

            /*Build.SnapToCell start.*/
            SnapToCell: function () {
if ( TRACE ) { TRACE( "Build#SnapToCell", this ); }

                var $t;
                var cellPositions = this.buildGrid.CellPositions;
                var bestPosition = this.originalPosition.$clone();
                var minDistance = 3.40282347E+38;
                $t = Bridge.getEnumerator(cellPositions);
                try {
                    while ($t.moveNext()) {
                        var cellPosition = $t.Current.$clone();
                        if (!this.IsCellOccupied(cellPosition.$clone())) {
                            var distance = UnityEngine.Vector2.FromVector3(this.transform.position.$clone()).sub( cellPosition ).length();
                            if (distance < minDistance) {
                                minDistance = distance;
                                bestPosition = cellPosition.$clone();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                this.targetPosition = UnityEngine.Vector3.FromVector2(bestPosition.$clone());
                this.originalPosition = bestPosition.$clone();
                this.isSnapping = true;
            },
            /*Build.SnapToCell end.*/

            /*Build.IsCellOccupied start.*/
            IsCellOccupied: function (cellPosition) {
if ( TRACE ) { TRACE( "Build#IsCellOccupied", this ); }

                var $t;
                var colliders = UnityEngine.Physics2D.OverlapCircleAll(cellPosition, 0.1);
                var array = colliders;
                $t = Bridge.getEnumerator(array);
                try {
                    while ($t.moveNext()) {
                        var collider = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(collider.gameObject, Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject)) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return false;
            },
            /*Build.IsCellOccupied end.*/

            /*Build.GetMouseWorldPosition start.*/
            GetMouseWorldPosition: function () {
if ( TRACE ) { TRACE( "Build#GetMouseWorldPosition", this ); }

                var mousePosition = UnityEngine.Input.mousePosition.$clone();
                mousePosition.z = UnityEngine.Camera.main.WorldToScreenPoint(this.transform.position).z;
                return UnityEngine.Camera.main.ScreenToWorldPoint(mousePosition);
            },
            /*Build.GetMouseWorldPosition end.*/


        }
    });
    /*Build end.*/

    /*BuildGrid start.*/
    Bridge.define("BuildGrid", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cells: null
        },
        props: {
            CellPositions: {
                get: function () {
if ( TRACE ) { TRACE( "BuildGrid#CellPositions#get", this ); }

                    var $t;
                    var positions = new (System.Collections.Generic.List$1(UnityEngine.Vector2)).ctor();
                    $t = Bridge.getEnumerator(this.cells);
                    try {
                        while ($t.moveNext()) {
                            var cell = $t.Current;
                            positions.add(new pc.Vec2( cell.position.x, cell.position.y ));
                        }
                    } finally {
                        if (Bridge.is($t, System.IDisposable)) {
                            $t.System$IDisposable$Dispose();
                        }
                    }
                    return positions;
                }
            }
        }
    });
    /*BuildGrid end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic"];

    /*Build start.*/
    $m("Build", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Collider2D),new UnityEngine.RequireComponent.ctor(UnityEngine.SpriteRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetMouseWorldPosition","t":8,"sn":"GetMouseWorldPosition","rt":$n[1].Vector3},{"a":1,"n":"IsCellOccupied","t":8,"pi":[{"n":"cellPosition","pt":$n[1].Vector2,"ps":0}],"sn":"IsCellOccupied","rt":$n[0].Boolean,"p":[$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":1,"n":"OnMouseDrag","t":8,"sn":"OnMouseDrag","rt":$n[0].Void},{"a":1,"n":"OnMouseUp","t":8,"sn":"OnMouseUp","rt":$n[0].Void},{"a":1,"n":"SnapToCell","t":8,"sn":"SnapToCell","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buildGrid","t":4,"rt":BuildGrid,"sn":"buildGrid"},{"a":1,"n":"isDragging","t":4,"rt":$n[0].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isSnapping","t":4,"rt":$n[0].Boolean,"sn":"isSnapping","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"offset","t":4,"rt":$n[1].Vector3,"sn":"offset"},{"a":1,"n":"originalPosition","t":4,"rt":$n[1].Vector2,"sn":"originalPosition"},{"a":1,"n":"originalSortingOrder","t":4,"rt":$n[0].Int32,"sn":"originalSortingOrder","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapSpeed","t":4,"rt":$n[0].Single,"sn":"snapSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spriteRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"spriteRenderer"},{"a":1,"n":"targetPosition","t":4,"rt":$n[1].Vector3,"sn":"targetPosition"}]}; }, $n);
    /*Build end.*/

    /*BuildGrid start.*/
    $m("BuildGrid", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CellPositions","t":16,"rt":$n[2].List$1(UnityEngine.Vector2),"g":{"a":2,"n":"get_CellPositions","t":8,"rt":$n[2].List$1(UnityEngine.Vector2),"fg":"CellPositions"},"fn":"CellPositions"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cells","t":4,"rt":$n[2].List$1(UnityEngine.Transform),"sn":"cells"}]}; }, $n);
    /*BuildGrid end.*/

    }});
