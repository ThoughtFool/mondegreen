(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(31),s=n.n(a),i=(n(48),n(107)),o=n.p+"static/media/vidBackground.134c4759.mp4",l=n(1),u=function(e){return console.log(e.videoContent),Object(l.jsx)("video",{className:"bg-fullscreen",autoPlay:!0,loop:!0,muted:!0,style:{position:"absolute",width:"100%",height:"100%",left:"50%",top:"50%",objectFit:"cover",transform:"translate(-50%, -50%",zIndex:"-1"},children:Object(l.jsx)("source",{src:e.videoContent,type:"video/mp4"})})},d=function(e){return Object(l.jsxs)("div",{className:"hero d-flex justify-content-center align-items-start flex-column",style:{position:"absolute",width:"80%",height:"80%",color:"white",backgroundColor:"rgba(51, 170, 51, .5)",borderRadius:"15px",padding:"25px"},children:[Object(l.jsx)("div",{className:"d-flex flex-row justify-content-center",style:{position:"relative",padding:"10px",width:"100%"},children:Object(l.jsx)("div",{children:Object(l.jsx)("h1",{style:{fontSize:"10vw"},children:"Monde Green"})})}),Object(l.jsx)("div",{className:"d-flex flex-row",style:{position:"relative",padding:"10px",width:"100%"},children:Object(l.jsx)("div",{children:Object(l.jsx)("p",{style:{fontSize:"1rem"},children:'Are you an aspiring kraoke singer, who misses the roar of an enthusiastic crowd? Are you eagerly awaiting for the world to open up again, so that you can share your love of covers? Well, why not bide your time, honing your craft and sharpening your skills with Monde Green? We are a simple karaoke app that helps singers belt out the "correct" song lyrics. Cuz, singing the right notes is hard enough. And if you can\'t read the lyrics off the screen, then "Hold me close, Tony Danza!"'})})}),Object(l.jsx)("div",{className:"d-flex flex-row",children:Object(l.jsx)("a",{className:"btn btn-success bt-lg",href:e.AUTH_URL,style:{position:"relative",padding:"10px",width:"100%"},children:"Login to Spotify"})})]})},h=["streaming","user-read-email","user-read-private","user-library-read","user-library-modify","user-read-playback-state","user-modify-playback-state"].join("%20"),f="https://accounts.spotify.com/authorize?client_id=".concat("11811ab54cf1454bbfa5075f5ed86dba","&response_type=").concat("code","&redirect_uri=").concat("https://monde-green.herokuapp.com","&scope=").concat(h);function b(){return Object(l.jsxs)(i.a,{className:"d-flex justify-content-center align-items-center flex-column",style:{minHeight:"100vh"},children:[Object(l.jsx)(u,{videoContent:o}),Object(l.jsx)(d,{AUTH_URL:f})]})}var j=n(7),p=n(8),m=n.n(p);function x(e){var t=e.track,n=e.chooseTrack;return Object(l.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{backgroundColor:"rgb(255,255,255, .5)",cursor:"pointer"},onClick:function(){n(t)},children:[Object(l.jsx)("img",{src:t.albumUrl,alt:"album art",style:{height:"75px",width:"75px"}}),Object(l.jsxs)("div",{className:"ml-3",children:[Object(l.jsx)("div",{children:t.title}),Object(l.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var g=n(41);function O(e){var t=e.accessToken,n=e.trackUri,r=Object(c.useState)(!1),a=Object(j.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){return i(!0)}),[n]),t?Object(l.jsx)(g.a,{token:t,showSaveIcon:!0,callback:function(e){e.isPlaying||i(!1)},play:s,uris:n?[n]:[]}):null}var v=n(108),y=n(40),k=new(n.n(y).a)({clientId:"11811ab54cf1454bbfa5075f5ed86dba"});function w(e){var t=function(e){var t=Object(c.useState)(null),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(null),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(null),d=Object(j.a)(u,2),h=d[0],f=d[1];return Object(c.useEffect)((function(){return m.a.post("/login",{code:e}).then((function(e){a(e.data.accessToken),l(e.data.refreshToken),f(e.data.expiresIn)})).catch((function(e){console.log("======================================"),console.error(e)}))}),[e]),Object(c.useEffect)((function(){if(null!==o&&null!==h){var e=setInterval((function(){m.a.post("/refresh",{refreshToken:o}).then((function(e){a(e.data.accessToken),f(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(e){console.error(e)}))}),1e3*(h-60));return function(){return clearInterval(e)}}}),[o,h]),r}(e.code),n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],s=r[1],d=Object(c.useState)([]),h=Object(j.a)(d,2),f=h[0],b=h[1],p=Object(c.useState)(),g=Object(j.a)(p,2),y=g[0],w=g[1],S=Object(c.useState)(""),N=Object(j.a)(S,2),T=N[0],C=N[1];function U(e){w(e),s(""),C("")}return Object(c.useEffect)((function(){y&&m.a.get("/lyrics",{params:{track:y.title,artist:y.artist}}).then((function(e){C(e.data.lyrics)}))}),[y]),Object(c.useEffect)((function(){t&&k.setAccessToken(t)}),[t]),Object(c.useEffect)((function(){if(!a)return b([]);if(t){var e=!1;return k.searchTracks(a).then((function(t){e||b(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[a,t]),Object(l.jsxs)(i.a,{className:"d-flex flex-column py-2",style:{height:"100vh"},children:[Object(l.jsx)(u,{videoContent:o}),Object(l.jsx)(v.a.Control,{type:"search",placeholder:"Search songs/Artists",value:a,onChange:function(e){return s(e.target.value)}}),Object(l.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflow:"auto"},children:[f.map((function(e){return Object(l.jsx)(x,{track:e,chooseTrack:U},e.uri)})),0===f.length&&Object(l.jsx)("div",{className:"text-center",style:{whiteSpace:"pre",backgroundColor:"rgb(255,255,255, .9)",fontSize:"1rem",fontWeight:"bold"},children:T})]}),Object(l.jsx)("div",{children:Object(l.jsx)(O,{accessToken:t,trackUri:null===y||void 0===y?void 0:y.uri})})]})}var S=function(){var e=new URLSearchParams(window.location.search).get("code");return e?Object(l.jsx)(w,{code:e}):Object(l.jsx)(b,{})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))},86:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.ecd12e0a.chunk.js.map