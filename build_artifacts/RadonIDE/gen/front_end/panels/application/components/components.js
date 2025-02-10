import*as e from"../../../ui/components/chrome_link/chrome_link.js";import"../../../ui/components/expandable_list/expandable_list.js";import"../../../ui/components/report_view/report_view.js";import"../../../ui/components/tree_outline/tree_outline.js";import*as t from"../../../core/common/common.js";import*as r from"../../../core/i18n/i18n.js";import*as o from"../../../core/sdk/sdk.js";import"../../../ui/components/buttons/buttons.js";import*as a from"../../../ui/components/legacy_wrapper/legacy_wrapper.js";import*as n from"../../../ui/components/render_coordinator/render_coordinator.js";import*as i from"../../../ui/legacy/components/utils/utils.js";import*as s from"../../../ui/lit-html/lit-html.js";import*as l from"../../../ui/visual_logging/visual_logging.js";import"../../../ui/components/data_grid/data_grid.js";import*as c from"../../../models/bindings/bindings.js";import*as d from"../../../core/platform/platform.js";import*as h from"../../../core/root/root.js";import*as u from"../../../models/workspace/workspace.js";import*as p from"../../network/forward/forward.js";import*as g from"../../../third_party/csp_evaluator/csp_evaluator.js";import"../../../ui/components/icon_button/icon_button.js";import*as m from"../../../ui/components/adorners/adorners.js";import*as v from"../../../core/host/host.js";import*as b from"../../../ui/components/input/input.js";import*as f from"../../../ui/legacy/legacy.js";const k={notMainFrame:"Navigation happened in a frame other than the main frame.",backForwardCacheDisabled:"Back/forward cache is disabled by flags. Visit chrome://flags/#back-forward-cache to enable it locally on this device.",relatedActiveContentsExist:"The page was opened using '`window.open()`' and another tab has a reference to it, or the page opened a window.",HTTPStatusNotOK:"Only pages with a status code of 2XX can be cached.",schemeNotHTTPOrHTTPS:"Only pages whose URL scheme is HTTP / HTTPS can be cached.",loading:"The page did not finish loading before navigating away.",wasGrantedMediaAccess:"Pages that have granted access to record video or audio are not currently eligible for back/forward cache.",HTTPMethodNotGET:"Only pages loaded via a GET request are eligible for back/forward cache.",subframeIsNavigating:"An iframe on the page started a navigation that did not complete.",timeout:"The page exceeded the maximum time in back/forward cache and was expired.",cacheLimit:"The page was evicted from the cache to allow another page to be cached.",JavaScriptExecution:"Chrome detected an attempt to execute JavaScript while in the cache.",rendererProcessKilled:"The renderer process for the page in back/forward cache was killed.",rendererProcessCrashed:"The renderer process for the page in back/forward cache crashed.",grantedMediaStreamAccess:"Pages that have granted media stream access are not currently eligible for back/forward cache.",cacheFlushed:"The cache was intentionally cleared.",serviceWorkerVersionActivation:"The page was evicted from back/forward cache due to a service worker activation.",sessionRestored:"Chrome restarted and cleared the back/forward cache entries.",serviceWorkerPostMessage:"A service worker attempted to send the page in back/forward cache a `MessageEvent`.",enteredBackForwardCacheBeforeServiceWorkerHostAdded:"A service worker was activated while the page was in back/forward cache.",serviceWorkerClaim:"The page was claimed by a service worker while it is in back/forward cache.",haveInnerContents:"Pages that have certain kinds of embedded content (e.g. PDFs) are not currently eligible for back/forward cache.",timeoutPuttingInCache:"The page timed out entering back/forward cache (likely due to long-running pagehide handlers).",backForwardCacheDisabledByLowMemory:"Back/forward cache is disabled due to insufficient memory.",backForwardCacheDisabledByCommandLine:"Back/forward cache is disabled by the command line.",networkRequestDatapipeDrainedAsBytesConsumer:"Pages that have inflight fetch() or XHR are not currently eligible for back/forward cache.",networkRequestRedirected:"The page was evicted from back/forward cache because an active network request involved a redirect.",networkRequestTimeout:"The page was evicted from the cache because a network connection was open too long. Chrome limits the amount of time that a page may receive data while cached.",networkExceedsBufferLimit:"The page was evicted from the cache because an active network connection received too much data. Chrome limits the amount of data that a page may receive while cached.",navigationCancelledWhileRestoring:"Navigation was cancelled before the page could be restored from back/forward cache.",backForwardCacheDisabledForPrerender:"Back/forward cache is disabled for prerenderer.",userAgentOverrideDiffers:"Browser has changed the user agent override header.",foregroundCacheLimit:"The page was evicted from the cache to allow another page to be cached.",backForwardCacheDisabledForDelegate:"Back/forward cache is not supported by delegate.",unloadHandlerExistsInMainFrame:"The page has an unload handler in the main frame.",unloadHandlerExistsInSubFrame:"The page has an unload handler in a sub frame.",serviceWorkerUnregistration:"ServiceWorker was unregistered while a page was in back/forward cache.",noResponseHead:"Pages that do not have a valid response head cannot enter back/forward cache.",cacheControlNoStore:"Pages with cache-control:no-store header cannot enter back/forward cache.",ineligibleAPI:"Ineligible APIs were used.",internalError:"Internal error.",webSocket:"Pages with WebSocket cannot enter back/forward cache.",webTransport:"Pages with WebTransport cannot enter back/forward cache.",webRTC:"Pages with WebRTC cannot enter back/forward cache.",mainResourceHasCacheControlNoStore:"Pages whose main resource has cache-control:no-store cannot enter back/forward cache.",mainResourceHasCacheControlNoCache:"Pages whose main resource has cache-control:no-cache cannot enter back/forward cache.",subresourceHasCacheControlNoStore:"Pages whose subresource has cache-control:no-store cannot enter back/forward cache.",subresourceHasCacheControlNoCache:"Pages whose subresource has cache-control:no-cache cannot enter back/forward cache.",containsPlugins:"Pages containing plugins are not currently eligible for back/forward cache.",documentLoaded:"The document did not finish loading before navigating away.",dedicatedWorkerOrWorklet:"Pages that use a dedicated worker or worklet are not currently eligible for back/forward cache.",outstandingNetworkRequestOthers:"Pages with an in-flight network request are not currently eligible for back/forward cache.",outstandingIndexedDBTransaction:"Page with ongoing indexed DB transactions are not currently eligible for back/forward cache.",requestedNotificationsPermission:"Pages that have requested notifications permissions are not currently eligible for back/forward cache.",requestedMIDIPermission:"Pages that have requested MIDI permissions are not currently eligible for back/forward cache.",requestedAudioCapturePermission:"Pages that have requested audio capture permissions are not currently eligible for back/forward cache.",requestedVideoCapturePermission:"Pages that have requested video capture permissions are not currently eligible for back/forward cache.",requestedBackForwardCacheBlockedSensors:"Pages that have requested sensor permissions are not currently eligible for back/forward cache.",requestedBackgroundWorkPermission:"Pages that have requested background sync or fetch permissions are not currently eligible for back/forward cache.",broadcastChannel:"The page cannot be cached because it has a BroadcastChannel instance with registered listeners.",indexedDBConnection:"Pages that have an open IndexedDB connection are not currently eligible for back/forward cache.",webXR:"Pages that use WebXR are not currently eligible for back/forward cache.",sharedWorker:"Pages that use SharedWorker are not currently eligible for back/forward cache.",webLocks:"Pages that use WebLocks are not currently eligible for back/forward cache.",webHID:"Pages that use WebHID are not currently eligible for back/forward cache.",webShare:"Pages that use WebShare are not currently eligible for back/forwad cache.",requestedStorageAccessGrant:"Pages that have requested storage access are not currently eligible for back/forward cache.",webNfc:"Pages that use WebNfc are not currently eligible for back/forwad cache.",outstandingNetworkRequestFetch:"Pages with an in-flight fetch network request are not currently eligible for back/forward cache.",outstandingNetworkRequestXHR:"Pages with an in-flight XHR network request are not currently eligible for back/forward cache.",appBanner:"Pages that requested an AppBanner are not currently eligible for back/forward cache.",printing:"Pages that show Printing UI are not currently eligible for back/forward cache.",webDatabase:"Pages that use WebDatabase are not currently eligible for back/forward cache.",pictureInPicture:"Pages that use Picture-in-Picture are not currently eligible for back/forward cache.",speechRecognizer:"Pages that use SpeechRecognizer are not currently eligible for back/forward cache.",idleManager:"Pages that use IdleManager are not currently eligible for back/forward cache.",paymentManager:"Pages that use PaymentManager are not currently eligible for back/forward cache.",speechSynthesis:"Pages that use SpeechSynthesis are not currently eligible for back/forward cache.",keyboardLock:"Pages that use Keyboard lock are not currently eligible for back/forward cache.",webOTPService:"Pages that use WebOTPService are not currently eligible for bfcache.",outstandingNetworkRequestDirectSocket:"Pages with an in-flight network request are not currently eligible for back/forward cache.",injectedJavascript:"Pages that `JavaScript` is injected into by extensions are not currently eligible for back/forward cache.",injectedStyleSheet:"Pages that a `StyleSheet` is injected into by extensions are not currently eligible for back/forward cache.",contentDiscarded:"Undefined",contentSecurityHandler:"Pages that use SecurityHandler are not eligible for back/forward cache.",contentWebAuthenticationAPI:"Pages that use WebAuthetication API are not eligible for back/forward cache.",contentFileChooser:"Pages that use FileChooser API are not eligible for back/forward cache.",contentSerial:"Pages that use Serial API are not eligible for back/forward cache.",contentFileSystemAccess:"Pages that use File System Access API are not eligible for back/forward cache.",contentMediaDevicesDispatcherHost:"Pages that use Media Device Dispatcher are not eligible for back/forward cache.",contentWebBluetooth:"Pages that use WebBluetooth API are not eligible for back/forward cache.",contentWebUSB:"Pages that use WebUSB API are not eligible for back/forward cache.",contentMediaSession:"Pages that use MediaSession API and set a playback state are not eligible for back/forward cache.",contentMediaSessionService:"Pages that use MediaSession API and set action handlers are not eligible for back/forward cache.",contentMediaPlay:"A media player was playing upon navigating away.",contentScreenReader:"Back/forward cache is disabled due to screen reader.",embedderPopupBlockerTabHelper:"Popup blocker was present upon navigating away.",embedderSafeBrowsingTriggeredPopupBlocker:"Safe Browsing considered this page to be abusive and blocked popup.",embedderSafeBrowsingThreatDetails:"Safe Browsing details were shown upon navigating away.",embedderAppBannerManager:"App Banner was present upon navigating away.",embedderDomDistillerViewerSource:"DOM Distiller Viewer was present upon navigating away.",embedderDomDistillerSelfDeletingRequestDelegate:"DOM distillation was in progress upon navigating away.",embedderOomInterventionTabHelper:"Out-Of-Memory Intervention bar was present upon navigating away.",embedderOfflinePage:"The offline page was shown upon navigating away.",embedderChromePasswordManagerClientBindCredentialManager:"Chrome Password Manager was present upon navigating away.",embedderPermissionRequestManager:"There were permission requests upon navigating away.",embedderModalDialog:"Modal dialog such as form resubmission or http password dialog was shown for the page upon navigating away.",embedderExtensions:"Back/forward cache is disabled due to extensions.",embedderExtensionMessaging:"Back/forward cache is disabled due to extensions using messaging API.",embedderExtensionMessagingForOpenPort:"Extensions with long-lived connection should close the connection before entering back/forward cache.",embedderExtensionSentMessageToCachedFrame:"Extensions with long-lived connection attempted to send messages to frames in back/forward cache.",errorDocument:"Back/forward cache is disabled due to a document error.",fencedFramesEmbedder:"Pages using FencedFrames cannot be stored in bfcache.",keepaliveRequest:"Back/forward cache is disabled due to a keepalive request.",jsNetworkRequestReceivedCacheControlNoStoreResource:"Back/forward cache is disabled because some JavaScript network request received resource with `Cache-Control: no-store` header.",indexedDBEvent:"Back/forward cache is disabled due to an IndexedDB event.",cookieDisabled:"Back/forward cache is disabled because cookies are disabled on a page that uses `Cache-Control: no-store`.",webRTCSticky:"Back/forward cache is disabled because WebRTC has been used.",webTransportSticky:"Back/forward cache is disabled because WebTransport has been used.",webSocketSticky:"Back/forward cache is disabled because WebSocket has been used."},w=r.i18n.registerUIStrings("panels/application/components/BackForwardCacheStrings.ts",k),y=r.i18n.getLazilyComputedLocalizedString.bind(void 0,w),S={NotPrimaryMainFrame:{name:y(k.notMainFrame)},BackForwardCacheDisabled:{name:y(k.backForwardCacheDisabled)},RelatedActiveContentsExist:{name:y(k.relatedActiveContentsExist)},HTTPStatusNotOK:{name:y(k.HTTPStatusNotOK)},SchemeNotHTTPOrHTTPS:{name:y(k.schemeNotHTTPOrHTTPS)},Loading:{name:y(k.loading)},WasGrantedMediaAccess:{name:y(k.wasGrantedMediaAccess)},HTTPMethodNotGET:{name:y(k.HTTPMethodNotGET)},SubframeIsNavigating:{name:y(k.subframeIsNavigating)},Timeout:{name:y(k.timeout)},CacheLimit:{name:y(k.cacheLimit)},JavaScriptExecution:{name:y(k.JavaScriptExecution)},RendererProcessKilled:{name:y(k.rendererProcessKilled)},RendererProcessCrashed:{name:y(k.rendererProcessCrashed)},GrantedMediaStreamAccess:{name:y(k.grantedMediaStreamAccess)},CacheFlushed:{name:y(k.cacheFlushed)},ServiceWorkerVersionActivation:{name:y(k.serviceWorkerVersionActivation)},SessionRestored:{name:y(k.sessionRestored)},ServiceWorkerPostMessage:{name:y(k.serviceWorkerPostMessage)},EnteredBackForwardCacheBeforeServiceWorkerHostAdded:{name:y(k.enteredBackForwardCacheBeforeServiceWorkerHostAdded)},ServiceWorkerClaim:{name:y(k.serviceWorkerClaim)},HaveInnerContents:{name:y(k.haveInnerContents)},TimeoutPuttingInCache:{name:y(k.timeoutPuttingInCache)},BackForwardCacheDisabledByLowMemory:{name:y(k.backForwardCacheDisabledByLowMemory)},BackForwardCacheDisabledByCommandLine:{name:y(k.backForwardCacheDisabledByCommandLine)},NetworkRequestDatapipeDrainedAsBytesConsumer:{name:y(k.networkRequestDatapipeDrainedAsBytesConsumer)},NetworkRequestRedirected:{name:y(k.networkRequestRedirected)},NetworkRequestTimeout:{name:y(k.networkRequestTimeout)},NetworkExceedsBufferLimit:{name:y(k.networkExceedsBufferLimit)},NavigationCancelledWhileRestoring:{name:y(k.navigationCancelledWhileRestoring)},BackForwardCacheDisabledForPrerender:{name:y(k.backForwardCacheDisabledForPrerender)},UserAgentOverrideDiffers:{name:y(k.userAgentOverrideDiffers)},ForegroundCacheLimit:{name:y(k.foregroundCacheLimit)},BackForwardCacheDisabledForDelegate:{name:y(k.backForwardCacheDisabledForDelegate)},UnloadHandlerExistsInMainFrame:{name:y(k.unloadHandlerExistsInMainFrame)},UnloadHandlerExistsInSubFrame:{name:y(k.unloadHandlerExistsInSubFrame)},ServiceWorkerUnregistration:{name:y(k.serviceWorkerUnregistration)},NoResponseHead:{name:y(k.noResponseHead)},CacheControlNoStore:{name:y(k.cacheControlNoStore)},CacheControlNoStoreCookieModified:{name:y(k.cacheControlNoStore)},CacheControlNoStoreHTTPOnlyCookieModified:{name:y(k.cacheControlNoStore)},DisableForRenderFrameHostCalled:{name:y(k.ineligibleAPI)},BlocklistedFeatures:{name:y(k.ineligibleAPI)},SchedulerTrackedFeatureUsed:{name:y(k.ineligibleAPI)},DomainNotAllowed:{name:y(k.internalError)},ConflictingBrowsingInstance:{name:y(k.internalError)},NotMostRecentNavigationEntry:{name:y(k.internalError)},IgnoreEventAndEvict:{name:y(k.internalError)},BrowsingInstanceNotSwapped:{name:y(k.internalError)},ActivationNavigationsDisallowedForBug1234857:{name:y(k.internalError)},Unknown:{name:y(k.internalError)},RenderFrameHostReused_SameSite:{name:y(k.internalError)},RenderFrameHostReused_CrossSite:{name:y(k.internalError)},WebSocket:{name:y(k.webSocket)},WebTransport:{name:y(k.webTransport)},WebRTC:{name:y(k.webRTC)},MainResourceHasCacheControlNoStore:{name:y(k.mainResourceHasCacheControlNoStore)},MainResourceHasCacheControlNoCache:{name:y(k.mainResourceHasCacheControlNoCache)},SubresourceHasCacheControlNoStore:{name:y(k.subresourceHasCacheControlNoStore)},SubresourceHasCacheControlNoCache:{name:y(k.subresourceHasCacheControlNoCache)},ContainsPlugins:{name:y(k.containsPlugins)},DocumentLoaded:{name:y(k.documentLoaded)},DedicatedWorkerOrWorklet:{name:y(k.dedicatedWorkerOrWorklet)},OutstandingNetworkRequestOthers:{name:y(k.outstandingNetworkRequestOthers)},OutstandingIndexedDBTransaction:{name:y(k.outstandingIndexedDBTransaction)},RequestedNotificationsPermission:{name:y(k.requestedNotificationsPermission)},RequestedMIDIPermission:{name:y(k.requestedMIDIPermission)},RequestedAudioCapturePermission:{name:y(k.requestedAudioCapturePermission)},RequestedVideoCapturePermission:{name:y(k.requestedVideoCapturePermission)},RequestedBackForwardCacheBlockedSensors:{name:y(k.requestedBackForwardCacheBlockedSensors)},RequestedBackgroundWorkPermission:{name:y(k.requestedBackgroundWorkPermission)},BroadcastChannel:{name:y(k.broadcastChannel)},IndexedDBConnection:{name:y(k.indexedDBConnection)},WebXR:{name:y(k.webXR)},SharedWorker:{name:y(k.sharedWorker)},WebLocks:{name:y(k.webLocks)},WebHID:{name:y(k.webHID)},WebShare:{name:y(k.webShare)},RequestedStorageAccessGrant:{name:y(k.requestedStorageAccessGrant)},WebNfc:{name:y(k.webNfc)},OutstandingNetworkRequestFetch:{name:y(k.outstandingNetworkRequestFetch)},OutstandingNetworkRequestXHR:{name:y(k.outstandingNetworkRequestXHR)},AppBanner:{name:y(k.appBanner)},Printing:{name:y(k.printing)},WebDatabase:{name:y(k.webDatabase)},PictureInPicture:{name:y(k.pictureInPicture)},SpeechRecognizer:{name:y(k.speechRecognizer)},IdleManager:{name:y(k.idleManager)},PaymentManager:{name:y(k.paymentManager)},SpeechSynthesis:{name:y(k.speechSynthesis)},KeyboardLock:{name:y(k.keyboardLock)},WebOTPService:{name:y(k.webOTPService)},OutstandingNetworkRequestDirectSocket:{name:y(k.outstandingNetworkRequestDirectSocket)},InjectedJavascript:{name:y(k.injectedJavascript)},InjectedStyleSheet:{name:y(k.injectedStyleSheet)},Dummy:{name:y(k.internalError)},ContentDiscarded:{name:y(k.contentDiscarded)},ContentSecurityHandler:{name:y(k.contentSecurityHandler)},ContentWebAuthenticationAPI:{name:y(k.contentWebAuthenticationAPI)},ContentFileChooser:{name:y(k.contentFileChooser)},ContentSerial:{name:y(k.contentSerial)},ContentFileSystemAccess:{name:y(k.contentFileSystemAccess)},ContentMediaDevicesDispatcherHost:{name:y(k.contentMediaDevicesDispatcherHost)},ContentWebBluetooth:{name:y(k.contentWebBluetooth)},ContentWebUSB:{name:y(k.contentWebUSB)},ContentMediaSession:{name:y(k.contentMediaSession)},ContentMediaSessionService:{name:y(k.contentMediaSessionService)},ContentMediaPlay:{name:y(k.contentMediaPlay)},ContentScreenReader:{name:y(k.contentScreenReader)},EmbedderPopupBlockerTabHelper:{name:y(k.embedderPopupBlockerTabHelper)},EmbedderSafeBrowsingTriggeredPopupBlocker:{name:y(k.embedderSafeBrowsingTriggeredPopupBlocker)},EmbedderSafeBrowsingThreatDetails:{name:y(k.embedderSafeBrowsingThreatDetails)},EmbedderAppBannerManager:{name:y(k.embedderAppBannerManager)},EmbedderDomDistillerViewerSource:{name:y(k.embedderDomDistillerViewerSource)},EmbedderDomDistillerSelfDeletingRequestDelegate:{name:y(k.embedderDomDistillerSelfDeletingRequestDelegate)},EmbedderOomInterventionTabHelper:{name:y(k.embedderOomInterventionTabHelper)},EmbedderOfflinePage:{name:y(k.embedderOfflinePage)},EmbedderChromePasswordManagerClientBindCredentialManager:{name:y(k.embedderChromePasswordManagerClientBindCredentialManager)},EmbedderPermissionRequestManager:{name:y(k.embedderPermissionRequestManager)},EmbedderModalDialog:{name:y(k.embedderModalDialog)},EmbedderExtensions:{name:y(k.embedderExtensions)},EmbedderExtensionMessaging:{name:y(k.embedderExtensionMessaging)},EmbedderExtensionMessagingForOpenPort:{name:y(k.embedderExtensionMessagingForOpenPort)},EmbedderExtensionSentMessageToCachedFrame:{name:y(k.embedderExtensionSentMessageToCachedFrame)},ErrorDocument:{name:y(k.errorDocument)},FencedFramesEmbedder:{name:y(k.fencedFramesEmbedder)},KeepaliveRequest:{name:y(k.keepaliveRequest)},JsNetworkRequestReceivedCacheControlNoStoreResource:{name:y(k.jsNetworkRequestReceivedCacheControlNoStoreResource)},IndexedDBEvent:{name:y(k.indexedDBEvent)},CookieDisabled:{name:y(k.cookieDisabled)},WebRTCSticky:{name:y(k.webRTCSticky)},WebTransportSticky:{name:y(k.webTransportSticky)},WebSocketSticky:{name:y(k.webSocketSticky)},HTTPAuthRequired:{name:r.i18n.lockedLazyString("HTTPAuthRequired")},CookieFlushed:{name:r.i18n.lockedLazyString("CookieFlushed")},SmartCard:{name:r.i18n.lockedLazyString("SmartCard")},LiveMediaStreamTrack:{name:r.i18n.lockedLazyString("LiveMediaStreamTrack")},UnloadHandler:{name:r.i18n.lockedLazyString("UnloadHandler")},ParserAborted:{name:r.i18n.lockedLazyString("ParserAborted")},BroadcastChannelOnMessage:{name:r.i18n.lockedLazyString("BroadcastChannelOnMessage")},RequestedByWebViewClient:{name:r.i18n.lockedLazyString("RequestedByWebViewClient")},PostMessageByWebViewClient:{name:r.i18n.lockedLazyString("PostMessageByWebViewClient")},WebViewSettingsChanged:{name:r.i18n.lockedLazyString("WebViewSettingsChanged")},WebViewJavaScriptObjectChanged:{name:r.i18n.lockedLazyString("WebViewJavaScriptObjectChanged")},WebViewMessageListenerInjected:{name:r.i18n.lockedLazyString("WebViewMessageListenerInjected")},WebViewSafeBrowsingAllowlistChanged:{name:r.i18n.lockedLazyString("WebViewSafeBrowsingAllowlistChanged")},WebViewDocumentStartJavascriptChanged:{name:r.i18n.lockedLazyString("WebViewDocumentStartJavascriptChanged")}},x=new CSSStyleSheet;x.replaceSync(".inline-icon{vertical-align:sub}.gray-text{color:var(--sys-color-token-subtle);margin:0 0 5px 56px;display:flex;flex-direction:row;align-items:center;flex:auto;overflow-wrap:break-word;overflow:hidden}.details-list{margin-left:56px;grid-column-start:span 2}.help-outline-icon{margin:0 2px}.circled-exclamation-icon{margin-right:10px;flex-shrink:0}.status{margin-right:11px;flex-shrink:0}.report-line{grid-column-start:span 2;display:flex;align-items:center;margin:0 30px;line-height:26px}.report-key{color:var(--sys-color-token-subtle);min-width:auto;overflow-wrap:break-word;align-self:start}.report-value{padding:0 6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.tree-outline li .selection{margin-left:-5px}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=backForwardCacheView.css */\n");const{html:T}=s,C={mainFrame:"Main Frame",backForwardCacheTitle:"Back/forward cache",unavailable:"unavailable",url:"URL:",unknown:"Unknown Status",normalNavigation:"Not served from back/forward cache: to trigger back/forward cache, use Chrome's back/forward buttons, or use the test button below to automatically navigate away and back.",restoredFromBFCache:"Successfully served from back/forward cache.",pageSupportNeeded:"Actionable",pageSupportNeededExplanation:"These reasons are actionable i.e. they can be cleaned up to make the page eligible for back/forward cache.",circumstantial:"Not Actionable",circumstantialExplanation:"These reasons are not actionable i.e. caching was prevented by something outside of the direct control of the page.",supportPending:"Pending Support",runTest:"Test back/forward cache",runningTest:"Running test",learnMore:"Learn more: back/forward cache eligibility",neverUseUnload:"Learn more: Never use unload handler",supportPendingExplanation:"Chrome support for these reasons is pending i.e. they will not prevent the page from being eligible for back/forward cache in a future version of Chrome.",blockingExtensionId:"Extension id: ",framesTitle:"Frames",issuesInSingleFrame:"{n, plural, =1 {# issue found in 1 frame.} other {# issues found in 1 frame.}}",issuesInMultipleFrames:"{n, plural, =1 {# issue found in {m} frames.} other {# issues found in {m} frames.}}",framesPerIssue:"{n, plural, =1 {# frame} other {# frames}}",blankURLTitle:"Blank URL [{PH1}]",filesPerIssue:"{n, plural, =1 {# file} other {# files}}"},$=r.i18n.registerUIStrings("panels/application/components/BackForwardCacheView.ts",C),R=r.i18n.getLocalizedString.bind(void 0,$),P=n.RenderCoordinator.RenderCoordinator.instance();class I extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#t="Result";#r=0;#o=0;constructor(){super(),this.#a()?.addEventListener(o.ResourceTreeModel.Events.PrimaryPageChanged,this.render,this),this.#a()?.addEventListener(o.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated,this.render,this)}#a(){const e=o.TargetManager.TargetManager.instance().primaryPageTarget();return e?.model(o.ResourceTreeModel.ResourceTreeModel)||null}#n(){return this.#a()?.mainFrame||null}connectedCallback(){this.parentElement?.classList.add("overflow-auto"),this.#e.adoptedStyleSheets=[x]}async render(){await P.write("BackForwardCacheView render",(()=>{s.render(T`
        <devtools-report .data=${{reportTitle:R(C.backForwardCacheTitle)}} jslog=${l.pane("back-forward-cache")}>

          ${this.#i()}
        </devtools-report>
      `,this.#e,{host:this})}))}#s(){o.TargetManager.TargetManager.instance().removeModelListener(o.ResourceTreeModel.ResourceTreeModel,o.ResourceTreeModel.Events.FrameNavigated,this.#s,this),this.#t="Result",this.render()}async#l(){o.TargetManager.TargetManager.instance().removeModelListener(o.ResourceTreeModel.ResourceTreeModel,o.ResourceTreeModel.Events.FrameNavigated,this.#l,this),await this.#c(50)}async#c(e){const t=o.TargetManager.TargetManager.instance().primaryPageTarget(),r=t?.model(o.ResourceTreeModel.ResourceTreeModel),a=await(r?.navigationHistory());r&&a&&(a.currentIndex===this.#o?window.setTimeout(this.#c.bind(this,2*e),e):(o.TargetManager.TargetManager.instance().addModelListener(o.ResourceTreeModel.ResourceTreeModel,o.ResourceTreeModel.Events.FrameNavigated,this.#s,this),r.navigateToHistoryEntry(a.entries[a.currentIndex-1])))}async#d(){const e=o.TargetManager.TargetManager.instance().primaryPageTarget(),t=e?.model(o.ResourceTreeModel.ResourceTreeModel),r=await(t?.navigationHistory());t&&r&&(this.#o=r.currentIndex,this.#t="Running",this.render(),o.TargetManager.TargetManager.instance().addModelListener(o.ResourceTreeModel.ResourceTreeModel,o.ResourceTreeModel.Events.FrameNavigated,this.#l,this),t.navigate("chrome://terms"))}#i(){const e=this.#n();if(!e)return T`
        <devtools-report-key>
          ${R(C.mainFrame)}
        </devtools-report-key>
        <devtools-report-value>
          ${R(C.unavailable)}
        </devtools-report-value>
      `;const r="Running"===this.#t,o=t.ParsedURL.schemeIs(e.url,"devtools:");return T`
      ${this.#h(e.backForwardCacheDetails.restoredFromCache)}
      <div class="report-line">
        <div class="report-key">
          ${R(C.url)}
        </div>
        <div class="report-value" title=${e.url}>
          ${e.url}
        </div>
      </div>
      ${this.#u(e.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <devtools-button
          aria-label=${R(C.runTest)}
          .disabled=${r||o}
          .spinner=${r}
          .variant=${"primary"}
          @click=${this.#d}
          jslog=${l.action("back-forward-cache.run-test").track({click:!0})}>
          ${r?T`
            ${R(C.runningTest)}`:`\n            ${R(C.runTest)}\n          `}
        </devtools-button>
      </devtools-report-section>
      <devtools-report-divider>
      </devtools-report-divider>
      ${this.#p(e.backForwardCacheDetails.explanations,e.backForwardCacheDetails.explanationsTree)}
      <devtools-report-section>
        <x-link href="https://web.dev/bfcache/" class="link"
        jslog=${l.action("learn-more.eligibility").track({click:!0})}>
          ${R(C.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#u(e){if(!e||0===e.explanations.length&&0===e.children.length)return s.nothing;const t=this.#g(e,{blankCount:1});t.node.treeNodeData.iconName="frame";let r="";r=1===t.frameCount?R(C.issuesInSingleFrame,{n:t.issueCount}):R(C.issuesInMultipleFrames,{n:t.issueCount,m:t.frameCount});const o={treeNodeData:{text:r},id:"root",children:()=>Promise.resolve([t.node])};return T`
      <div class="report-line"
      jslog=${l.section("frames")}>
        <div class="report-key">
          ${R(C.framesTitle)}
        </div>
        <div class="report-value">
          <devtools-tree-outline .data=${{tree:[o],defaultRenderer:function(e){return T`
        <div class="text-ellipsis">
          ${e.treeNodeData.iconName?T`
            <devtools-icon class="inline-icon" style="margin-bottom: -3px;" .data=${{iconName:e.treeNodeData.iconName,color:"var(--icon-default)",width:"20px",height:"20px"}}>
            </devtools-icon>
          `:s.nothing}
          ${e.treeNodeData.text}
        </div>
      `},compact:!0}}>
          </devtools-tree-outline>
        </div>
      </div>
    `}#g(e,t){let r=1,o=0;const a=[];let n="";e.url.length?n=e.url:(n=R(C.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1);for(const t of e.explanations){const e={treeNodeData:{text:t.reason},id:String(this.#r++)};o+=1,a.push(e)}for(const n of e.children){const e=this.#g(n,t);e.issueCount>0&&(a.push(e.node),o+=e.issueCount,r+=e.frameCount)}let i={treeNodeData:{text:`(${o}) ${n}`},id:String(this.#r++)};return a.length?(i={...i,children:()=>Promise.resolve(a)},i.treeNodeData.iconName="iframe"):e.url.length||(t.blankCount-=1),{node:i,frameCount:r,issueCount:o}}#h(e){switch(e){case!0:return T`
          <devtools-report-section>
            <div class="status">
              <devtools-icon class="inline-icon" .data=${{iconName:"check-circle",color:"var(--icon-checkmark-green)",width:"20px",height:"20px"}}>
              </devtools-icon>
            </div>
            ${R(C.restoredFromBFCache)}
          </devtools-report-section>
        `;case!1:return T`
          <devtools-report-section>
            <div class="status">
              <devtools-icon class="inline-icon" .data=${{iconName:"clear",color:"var(--icon-default)",width:"20px",height:"20px"}}>
              </devtools-icon>
            </div>
            ${R(C.normalNavigation)}
          </devtools-report-section>
        `}return T`
    <devtools-report-section>
      ${R(C.unknown)}
    </devtools-report-section>
    `}#m(e,t,r){let o=e.url;0===o.length&&(o=R(C.blankURLTitle,{PH1:t.blankCount}),t.blankCount+=1),e.explanations.forEach((e=>{let t=r.get(e.reason);void 0===t?(t=[o],r.set(e.reason,t)):t.push(o)})),e.children.map((e=>{this.#m(e,t,r)}))}#p(e,t){if(0===e.length)return s.nothing;const r=e.filter((e=>"PageSupportNeeded"===e.type)),o=e.filter((e=>"SupportPending"===e.type)),a=e.filter((e=>"Circumstantial"===e.type)),n=new Map;return t&&this.#m(t,{blankCount:1},n),T`
      ${this.#v(R(C.pageSupportNeeded),R(C.pageSupportNeededExplanation),r,n)}
      ${this.#v(R(C.supportPending),R(C.supportPendingExplanation),o,n)}
      ${this.#v(R(C.circumstantial),R(C.circumstantialExplanation),a,n)}
    `}#v(e,t,r,o){return T`
      ${r.length>0?T`
        <devtools-report-section-header>
          ${e}
          <div class="help-outline-icon">
            <devtools-icon class="inline-icon" .data=${{iconName:"help",color:"var(--icon-default)",width:"16px",height:"16px"}} title=${t}>
            </devtools-icon>
          </div>
        </devtools-report-section-header>
        ${r.map((e=>this.#b(e,o.get(e.reason))))}
      `:s.nothing}
    `}#f(e){if("EmbedderExtensionSentMessageToCachedFrame"===e.reason&&e.context){const t="chrome://extensions/?id="+e.context;return T`${R(C.blockingExtensionId)}
      <devtools-chrome-link .href=${t}>${e.context}</devtools-chrome-link>`}return s.nothing}#k(e){if(void 0===e||0===e.length)return s.nothing;const t=[T`<div>${R(C.framesPerIssue,{n:e.length})}</div>`];return t.push(...e.map((e=>T`<div class="text-ellipsis" title=${e}
    jslog=${l.treeItem()}>${e}</div>`))),T`
      <div class="details-list"
      jslog=${l.tree("frames-per-issue")}>
        <devtools-expandable-list .data=${{rows:t,title:R(C.framesPerIssue,{n:e.length})}}
        jslog=${l.treeItem()}></devtools-expandable-list>
      </div>
    `}#w(e){return"UnloadHandlerExistsInMainFrame"===e.reason||"UnloadHandlerExistsInSubFrame"===e.reason?T`
        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"
        jslog=${l.action("learn-more.never-use-unload").track({click:!0})}>
          ${R(C.neverUseUnload)}
        </x-link>`:s.nothing}#y(e){if(void 0===e||0===e.length)return s.nothing;const t=new i.Linkifier.Linkifier(50),r=[T`<div>${R(C.filesPerIssue,{n:e.length})}</div>`];return r.push(...e.map((e=>T`${t.linkifyScriptLocation(null,null,e.url,e.lineNumber,{columnNumber:e.columnNumber,showColumnNumber:!0,inlineFrameIndex:0})}`))),T`
      <div class="details-list">
        <devtools-expandable-list .data=${{rows:r}}></devtools-expandable-list>
      </div>
    `}#b(e,t){return T`
      <devtools-report-section>
        ${e.reason in S?T`
            <div class="circled-exclamation-icon">
              <devtools-icon class="inline-icon" .data=${{iconName:"warning",color:"var(--icon-warning)",width:"16px",height:"16px"}}>
              </devtools-icon>
            </div>
            <div>
              ${S[e.reason].name()}
              ${this.#w(e)}
              ${this.#f(e)}
           </div>`:s.nothing}
      </devtools-report-section>
      <div class="gray-text">
        ${e.reason}
      </div>
      ${this.#y(e.details)}
      ${this.#k(t)}
    `}}customElements.define("devtools-resources-back-forward-cache-view",I);var M=Object.freeze({__proto__:null,BackForwardCacheView:I});const D=new CSSStyleSheet;D.replaceSync("devtools-data-grid-controller{border:1px solid var(--sys-color-divider);margin-top:0}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=bounceTrackingMitigationsView.css */\n");const{html:B}=s,F={bounceTrackingMitigationsTitle:"Bounce tracking mitigations",forceRun:"Force run",runningMitigations:"Running",stateDeletedFor:"State was deleted for the following sites:",checkingPotentialTrackers:"Checking for potential bounce tracking sites.",learnMore:"Learn more: Bounce Tracking Mitigations",noPotentialBounceTrackersIdentified:"State was not cleared for any potential bounce tracking sites. Either none were identified or third-party cookies are not blocked.",featureDisabled:'Bounce tracking mitigations are disabled. To enable them, set the flag at {PH1} to "Enabled With Deletion".',featureFlag:"Bounce Tracking Mitigations Feature Flag"},E=r.i18n.registerUIStrings("panels/application/components/BounceTrackingMitigationsView.ts",F),L=r.i18n.getLocalizedString.bind(void 0,E);class N extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#S=[];#t="Result";#x=!1;#T=!1;connectedCallback(){this.#e.adoptedStyleSheets=[D],this.#C()}async#C(){s.render(B`
      <devtools-report .data=${{reportTitle:L(F.bounceTrackingMitigationsTitle)}}
                       jslog=${l.pane("bounce-tracking-mitigations")}>
        ${await this.#i()}
      </devtools-report>
    `,this.#e,{host:this})}async#i(){if(this.#x||await this.#$(),"Disabled"===this.#t){const t=new e.ChromeLink.ChromeLink;return t.href="chrome://flags/#bounce-tracking-mitigations",t.textContent=L(F.featureFlag),B`
        <devtools-report-section>
          ${r.i18n.getFormatLocalizedString(E,F.featureDisabled,{PH1:t})}
        </devtools-report-section>
      `}return B`
      <devtools-report-section>
        ${this.#R()}
      </devtools-report-section>
        ${this.#P()}
      <devtools-report-divider>
      </devtools-report-divider>
      <devtools-report-section>
        <x-link href="https://privacycg.github.io/nav-tracking-mitigations/#bounce-tracking-mitigations" class="link"
        jslog=${l.link("learn-more").track({click:!0})}>
          ${L(F.learnMore)}
        </x-link>
      </devtools-report-section>
    `}#R(){const e="Running"===this.#t;return B`
      <devtools-button
        aria-label=${L(F.forceRun)}
        .disabled=${e}
        .spinner=${e}
        .variant=${"primary"}
        @click=${this.#I}
        jslog=${l.action("force-run").track({click:!0})}>
        ${e?B`
          ${L(F.runningMitigations)}`:`\n          ${L(F.forceRun)}\n        `}
      </devtools-button>
    `}#P(){if(!this.#T)return B``;if(0===this.#S.length)return B`
        <devtools-report-section>
        ${"Running"===this.#t?B`
          ${L(F.checkingPotentialTrackers)}`:`\n          ${L(F.noPotentialBounceTrackersIdentified)}\n        `}
        </devtools-report-section>
      `;const e={columns:[{id:"sites",title:L(F.stateDeletedFor),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#M(),initialSort:{columnId:"sites",direction:"ASC"}};return B`
      <devtools-report-section>
        <devtools-data-grid-controller .data=${e}>
        </devtools-data-grid-controller>
      </devtools-report-section>
    `}async#I(){const e=o.TargetManager.TargetManager.instance().primaryPageTarget();if(!e)return;this.#T=!0,this.#t="Running",this.#C();const t=await e.storageAgent().invoke_runBounceTrackingMitigations();this.#S=[],t.deletedSites.forEach((e=>{this.#S.push(e)})),this.#D()}#D(){this.#t="Result",this.#C()}#M(){return this.#S.map((e=>({cells:[{columnId:"sites",value:e}]})))}async#$(){this.#x=!0;const e=o.TargetManager.TargetManager.instance().primaryPageTarget();e&&((await e.systemInfo().invoke_getFeatureState({featureState:"DIPS"})).featureEnabled||(this.#t="Disabled"))}}customElements.define("devtools-bounce-tracking-mitigations-view",N);var A=Object.freeze({__proto__:null,BounceTrackingMitigationsView:N,i18nString:L});const H=new CSSStyleSheet;H.replaceSync(":host{overflow:auto;height:100%}.reporting-container{height:100%;display:flex;flex-direction:column}.reporting-header{font-size:15px;background-color:var(--sys-color-surface2);padding:1px 4px}.reporting-placeholder{flex-grow:1;display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--sys-color-token-subtle);min-width:min-content;text-align:center}devtools-data-grid-controller{border:1px solid var(--sys-color-divider)}.inline-icon{vertical-align:text-bottom}\n/*# sourceURL=reportingApiGrid.css */\n");const O={noEndpointsToDisplay:"No endpoints to display"},W=r.i18n.registerUIStrings("panels/application/components/EndpointsGrid.ts",O),U=r.i18n.getLocalizedString.bind(void 0,W),{render:q,html:z}=s;class j extends HTMLElement{#e=this.attachShadow({mode:"open"});#B=new Map;connectedCallback(){this.#e.adoptedStyleSheets=[H],this.#C()}set data(e){this.#B=e.endpoints,this.#C()}#C(){const e={columns:[{id:"origin",title:r.i18n.lockedString("Origin"),widthWeighting:30,hideable:!1,visible:!0},{id:"name",title:r.i18n.lockedString("Name"),widthWeighting:20,hideable:!1,visible:!0},{id:"url",title:r.i18n.lockedString("URL"),widthWeighting:30,hideable:!1,visible:!0}],rows:this.#F()};q(z`
      <div class="reporting-container" jslog=${l.section("endpoints")}>
        <div class="reporting-header">${r.i18n.lockedString("Endpoints")}</div>
        ${this.#B.size>0?z`
          <devtools-data-grid-controller .data=${e}>
          </devtools-data-grid-controller>
        `:z`
          <div class="reporting-placeholder">
            <div>${U(O.noEndpointsToDisplay)}</div>
          </div>
        `}
      </div>
    `,this.#e,{host:this})}#F(){return Array.from(this.#B).map((([e,t])=>t.map((t=>({cells:[{columnId:"origin",value:e},{columnId:"name",value:t.groupName},{columnId:"url",value:t.url}]}))))).flat()}}customElements.define("devtools-resources-endpoints-grid",j);var _=Object.freeze({__proto__:null,EndpointsGrid:j,i18nString:U});const V=new CSSStyleSheet;V.replaceSync("button.link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;border:none;background:none;font-family:inherit;font-size:inherit}\n/*# sourceURL=stackTraceLinkButton.css */\n");const G=new CSSStyleSheet;G.replaceSync(".stack-trace-row{display:flex}.stack-trace-function-name{width:100px}.stack-trace-source-location{display:flex;overflow:hidden}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.stack-trace-source-location .text-ellipsis{padding-right:2px}.ignore-list-link{opacity:60%}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;border:none;background:none;font-family:inherit;font-size:var(--sys-size-6);&:focus-visible{outline:2px solid var(--sys-color-state-focus-ring);outline-offset:0;border-radius:var(--sys-shape-corner-extra-small)}}\n/*# sourceURL=stackTraceRow.css */\n");const{html:K}=s,J={cannotRenderStackTrace:"Cannot render stack trace",showSMoreFrames:"{n, plural, =1 {Show # more frame} other {Show # more frames}}",showLess:"Show less",creationStackTrace:"Frame Creation `Stack Trace`"},X=r.i18n.registerUIStrings("panels/application/components/StackTrace.ts",J),Y=r.i18n.getLocalizedString.bind(void 0,X);class Q extends HTMLElement{#e=this.attachShadow({mode:"open"});#E=null;set data(e){this.#E=e.stackTraceRowItem,this.#C()}connectedCallback(){this.#e.adoptedStyleSheets=[G]}#C(){this.#E&&s.render(K`
      <div class="stack-trace-row">
              <div class="stack-trace-function-name text-ellipsis" title=${this.#E.functionName}>
                ${this.#E.functionName}
              </div>
              <div class="stack-trace-source-location">
                ${this.#E.link?K`<div class="text-ellipsis">\xA0@\xA0${this.#E.link}</div>`:s.nothing}
              </div>
            </div>
    `,this.#e,{host:this})}}class Z extends HTMLElement{#e=this.attachShadow({mode:"open"});#L=()=>{};#N=null;#A=!1;set data(e){this.#L=e.onShowAllClick,this.#N=e.hiddenCallFramesCount,this.#A=e.expandedView,this.#C()}connectedCallback(){this.#e.adoptedStyleSheets=[V]}#C(){if(!this.#N)return;const e=this.#A?Y(J.showLess):Y(J.showSMoreFrames,{n:this.#N});s.render(K`
      <div class="stack-trace-row">
          <button class="link" @click=${()=>this.#L()}>
            ${e}
          </button>
        </div>
    `,this.#e,{host:this})}}class ee extends HTMLElement{#e=this.attachShadow({mode:"open"});#H=new i.Linkifier.Linkifier;#O=[];#W=!1;set data(e){const t=e.frame,{creationStackTrace:r,creationStackTraceTarget:o}=t.getCreationStackTraceData();r&&(this.#O=e.buildStackTraceRows(r,o,this.#H,!0,this.#U.bind(this))),this.#C()}#U(e){this.#O=e,this.#C()}#q(){this.#W=!this.#W,this.#C()}createRowTemplates(){const e=[];let t=0;for(const r of this.#O){let o=!1;if("link"in r&&r.link){const e=i.Linkifier.Linkifier.uiLocation(r.link);e&&c.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(e.uiSourceCode)&&(o=!0)}!this.#W&&o||("functionName"in r&&e.push(K`
          <devtools-stack-trace-row data-stack-trace-row .data=${{stackTraceRowItem:r}}></devtools-stack-trace-row>`),"asyncDescription"in r&&e.push(K`
            <div>${r.asyncDescription}</div>
          `)),"functionName"in r&&o&&t++}return t&&e.push(K`
      <devtools-stack-trace-link-button data-stack-trace-row .data=${{onShowAllClick:this.#q.bind(this),hiddenCallFramesCount:t,expandedView:this.#W}}></devtools-stack-trace-link-button>
      `),e}#C(){if(!this.#O.length)return void s.render(K`
          <span>${Y(J.cannotRenderStackTrace)}</span>
        `,this.#e,{host:this});const e=this.createRowTemplates();s.render(K`
        <devtools-expandable-list .data=${{rows:e,title:Y(J.creationStackTrace)}}
                                  jslog=${l.tree()}>
        </devtools-expandable-list>
      `,this.#e,{host:this})}}customElements.define("devtools-stack-trace-row",Q),customElements.define("devtools-stack-trace-link-button",Z),customElements.define("devtools-resources-stack-trace",ee);var te=Object.freeze({__proto__:null,StackTrace:ee,StackTraceLinkButton:Z,StackTraceRow:Q});const re=new CSSStyleSheet;re.replaceSync('.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}button ~ .text-ellipsis{padding-left:2px}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px;padding:0}button.link{border:none;background:none;font-family:inherit;font-size:inherit;height:16px}button.link:has(devtools-icon){margin-top:5px}devtools-button.help-button{top:4px;position:relative}button.text-link{padding-left:2px;height:26px}.inline-button{padding-left:1ex}.inline-comment{padding-left:1ex;white-space:pre-line}.inline-comment::before{content:"("}.inline-comment::after{content:")"}.inline-name{color:var(--sys-color-token-subtle);padding-right:4px;user-select:none;white-space:pre-line}.inline-items{display:flex}.span-cols{grid-column-start:span 2;margin:0 0 8px 30px;line-height:28px}.without-min-width{min-width:auto}.bold{font-weight:bold}.link:not(button):has(devtools-icon){vertical-align:baseline;margin-inline-start:3px}.inline-icon{margin-bottom:-5px;width:18px;height:18px;vertical-align:baseline}@media (forced-colors: active){.link,\n  .devtools-link{color:linktext;text-decoration-color:linktext}}\n/*# sourceURL=frameDetailsReportView.css */\n');const oe=new CSSStyleSheet;oe.replaceSync(":host .badge-error{--override-adorner-text-color:var(--sys-color-error-bright);--override-adorner-border-color:var(--sys-color-error-bright)}:host .badge-success{--override-adorner-text-color:var(--sys-color-tertiary);--override-adorner-border-color:var(--sys-color-tertiary)}:host .badge-secondary{--override-adorner-text-color:var(--sys-color-token-subtle);--override-adorner-border-color:var(--sys-color-token-subtle)}:host{font-family:var(--source-code-font-family)}\n/*# sourceURL=badge.css */\n");const ae=new CSSStyleSheet;ae.replaceSync(".content{display:grid;grid-template-columns:min-content 1fr}.key{color:var(--sys-color-token-subtle);padding:0 6px;text-align:right;white-space:pre}.value{color:var(--sys-color-token-subtle);margin-inline-start:0;padding:0 6px}.error-text{color:var(--sys-color-error-bright);font-weight:bold}\n/*# sourceURL=originTrialTokenRows.css */\n");const ne=new CSSStyleSheet;ne.replaceSync(".status-badge{border-radius:4px;padding:4px;background:var(--sys-color-neutral-container);& > devtools-icon{vertical-align:sub}}\n/*# sourceURL=originTrialTreeView.css */\n");const{html:ie,Directives:{ifDefined:se}}=s,le={origin:"Origin",trialName:"Trial Name",expiryTime:"Expiry Time",usageRestriction:"Usage Restriction",isThirdParty:"Third Party",matchSubDomains:"Subdomain Matching",rawTokenText:"Raw Token",status:"Token Status",token:"Token",tokens:"{PH1} tokens",noTrialTokens:"No trial tokens"},ce=r.i18n.registerUIStrings("panels/application/components/OriginTrialTreeView.ts",le),de=r.i18n.getLocalizedString.bind(void 0,ce);class he extends HTMLElement{#e=this.attachShadow({mode:"open"});#z=new m.Adorner.Adorner;set data(e){this.#C(e)}connectedCallback(){this.#e.adoptedStyleSheets=[oe]}#C(e){const t=document.createElement("span");t.textContent=e.badgeContent,this.#z.data={name:"badge",content:t},this.#z.classList.add(`badge-${e.style}`),s.render(ie`
      ${this.#z}
    `,this.#e,{host:this})}}function ue(e){return{treeNodeData:e,id:"OriginTrialTreeNode#"+e.trialName,children:async()=>e.tokensWithStatus.length>1?e.tokensWithStatus.map(pe):me(e.tokensWithStatus[0]),renderer:e=>{const t=e.treeNodeData,r=ie`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:de(le.tokens,{PH1:t.tokensWithStatus.length}),style:"secondary"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return ie`
        ${t.trialName}
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:t.status,style:"Enabled"===t.status?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
        ${t.tokensWithStatus.length>1?r:s.nothing}
      `}}}function pe(e){return{treeNodeData:e.status,id:"TokenNode#"+e.rawTokenText,children:async()=>me(e),renderer:(e,t)=>{const r=e.treeNodeData,o=ie`
        <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:r,style:"Success"===r?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>
      `;return ie`${de(le.token)} ${t.isExpanded?s.nothing:o}`}}}function ge(e){return ie`
    <devtools-resources-origin-trial-token-rows .data=${{node:e}}>
    </devtools-resources-origin-trial-token-rows>
    `}function me(e){return[{treeNodeData:e,id:"TokenDetailsNode#"+e.rawTokenText,renderer:ge},(t=e.rawTokenText,{treeNodeData:de(le.rawTokenText),id:"TokenRawTextContainerNode#"+t,children:async()=>[{treeNodeData:t,id:"TokenRawTextNode#"+t,renderer:e=>{const t=e.treeNodeData;return ie`
        <div style="overflow-wrap: break-word;">
          ${t}
        </div>
        `}}]})];var t}function ve(e){return ie`${String(e.treeNodeData)}`}customElements.define("devtools-resources-origin-trial-tree-view-badge",he);class be extends HTMLElement{#e=this.attachShadow({mode:"open"});#j=null;#_=[];#V=new Intl.DateTimeFormat(r.DevToolsLocale.DevToolsLocale.instance().locale,{dateStyle:"long",timeStyle:"long"});set data(e){this.#j=e.node.treeNodeData,this.#G()}connectedCallback(){this.#e.adoptedStyleSheets=[ae],this.#C()}#K=(e,t)=>ie`
        <div class=${se(t?"error-text":void 0)}>
          ${e}
        </div>`;#G(){this.#j?.parsedToken&&(this.#_=[{name:de(le.origin),value:this.#K(this.#j.parsedToken.origin,"WrongOrigin"===this.#j.status)},{name:de(le.expiryTime),value:this.#K(this.#V.format(1e3*this.#j.parsedToken.expiryTime),"Expired"===this.#j.status)},{name:de(le.usageRestriction),value:this.#K(this.#j.parsedToken.usageRestriction)},{name:de(le.isThirdParty),value:this.#K(this.#j.parsedToken.isThirdParty.toString())},{name:de(le.matchSubDomains),value:this.#K(this.#j.parsedToken.matchSubDomains.toString())}],"UnknownTrial"===this.#j.status&&(this.#_=[{name:de(le.trialName),value:this.#K(this.#j.parsedToken.trialName)},...this.#_]))}#C(){if(!this.#j)return;const e=[{name:de(le.status),value:ie`
          <devtools-resources-origin-trial-tree-view-badge .data=${{badgeContent:this.#j.status,style:"Success"===this.#j.status?"success":"error"}}></devtools-resources-origin-trial-tree-view-badge>`},...this.#_].map((e=>ie`
          <div class="key">${e.name}</div>
          <div class="value">${e.value}</div>
          `));s.render(ie`
      <div class="content">
        ${e}
      </div>
    `,this.#e,{host:this})}}customElements.define("devtools-resources-origin-trial-token-rows",be);class fe extends HTMLElement{#e=this.attachShadow({mode:"open"});set data(e){this.#C(e.trials)}connectedCallback(){this.#e.adoptedStyleSheets=[ne]}#C(e){e.length?s.render(ie`
      <devtools-tree-outline .data=${{tree:e.map(ue),defaultRenderer:ve}}>
      </devtools-tree-outline>
    `,this.#e,{host:this}):s.render(ie`
    <span class="status-badge">
      <devtools-icon
          .data=${{iconName:"clear",color:"var(--icon-default)",width:"16px",height:"16px"}}
        >
      </devtools-icon>
      <span>${de(le.noTrialTokens)}</span>
    </span>`,this.#e,{host:this})}}customElements.define("devtools-resources-origin-trial-tree-view",fe);var ke=Object.freeze({__proto__:null,Badge:he,OriginTrialTokenRows:be,OriginTrialTreeView:fe});const we=new CSSStyleSheet;we.replaceSync(":host{display:contents}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.link,\n.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}button.link{border:none;background:none;font-family:inherit;font-size:inherit}.policies-list{padding-top:3px}.permissions-row{display:flex;line-height:22px}.permissions-row div{padding-right:5px}.feature-name{width:135px}.allowed-icon{vertical-align:sub}.block-reason{width:215px}\n/*# sourceURL=permissionsPolicySection.css */\n");const{html:ye}=s,Se={showDetails:"Show details",hideDetails:"Hide details",allowedFeatures:"Allowed Features",disabledFeatures:"Disabled Features",clickToShowHeader:'Click to reveal the request whose "`Permissions-Policy`" HTTP header disables this feature.',clickToShowIframe:"Click to reveal the top-most iframe which does not allow this feature in the elements panel.",disabledByIframe:'missing in iframe "`allow`" attribute',disabledByHeader:'disabled by "`Permissions-Policy`" header',disabledByFencedFrame:"disabled inside a `fencedframe`"},xe=r.i18n.registerUIStrings("panels/application/components/PermissionsPolicySection.ts",Se),Te=r.i18n.getLocalizedString.bind(void 0,xe),Ce=n.RenderCoordinator.RenderCoordinator.instance();function $e(e,t,r,o){return ye`
  <devtools-button
    .iconName=${e}
    title=${t}
    .variant=${"icon"}
    .size=${"SMALL"}
    @click=${r}
    jslog=${l.action().track({click:!0}).context(o)}></devtools-button>
  `}class Re extends HTMLElement{#e=this.attachShadow({mode:"open"});#J={policies:[],showDetails:!1};set data(e){this.#J=e,this.#C()}connectedCallback(){this.#e.adoptedStyleSheets=[we]}#X(){this.#J.showDetails=!this.#J.showDetails,this.#C()}#Y(){const e=this.#J.policies.filter((e=>e.allowed)).map((e=>e.feature)).sort();return e.length?ye`
      <devtools-report-key>${Te(Se.allowedFeatures)}</devtools-report-key>
      <devtools-report-value>
        ${e.join(", ")}
      </devtools-report-value>
    `:s.nothing}async#Q(){const e=this.#J.policies.filter((e=>!e.allowed)).sort(((e,t)=>e.feature.localeCompare(t.feature)));if(!e.length)return s.nothing;if(!this.#J.showDetails)return ye`
        <devtools-report-key>${Te(Se.disabledFeatures)}</devtools-report-key>
        <devtools-report-value>
          ${e.map((e=>e.feature)).join(", ")}
          <devtools-button
          .variant=${"outlined"}
          @click=${()=>this.#X()}
          jslog=${l.action("show-disabled-features-details").track({click:!0})}>${Te(Se.showDetails)}
        </devtools-button>
        </devtools-report-value>
      `;const r=o.FrameManager.FrameManager.instance(),a=await Promise.all(e.map((async e=>{const o=e.locator?r.getFrame(e.locator.frameId):null,a=e.locator?.blockReason,n=await("IframeAttribute"===a&&o&&o.getOwnerDOMNodeOrDocument()),i=o&&o.resourceForURL(o.url),l="Header"===a&&i&&i.request,c=(()=>{switch(a){case"IframeAttribute":return Te(Se.disabledByIframe);case"Header":return Te(Se.disabledByHeader);case"InFencedFrameTree":return Te(Se.disabledByFencedFrame);default:return""}})();return ye`
        <div class="permissions-row">
          <div>
            <devtools-icon class="allowed-icon"
              .data=${{color:"var(--icon-error)",iconName:"cross-circle",width:"20px",height:"20px"}}>
            </devtools-icon>
          </div>
          <div class="feature-name text-ellipsis">
            ${e.feature}
          </div>
          <div class="block-reason">${c}</div>
          <div>
            ${n?$e("code-circle",Te(Se.clickToShowIframe),(()=>t.Revealer.reveal(n)),"reveal-in-elements"):s.nothing}
            ${l?$e("arrow-up-down-circle",Te(Se.clickToShowHeader),(async()=>{if(!l)return;const e=l.responseHeaderValue("permissions-policy")?"permissions-policy":"feature-policy",r=p.UIRequestLocation.UIRequestLocation.responseHeaderMatch(l,{name:e,value:""});await t.Revealer.reveal(r)}),"reveal-in-network"):s.nothing}
          </div>
        </div>
      `})));return ye`
      <devtools-report-key>${Te(Se.disabledFeatures)}</devtools-report-key>
      <devtools-report-value class="policies-list">
        ${a}
        <div class="permissions-row">
        <devtools-button
          .variant=${"outlined"}
          @click=${()=>this.#X()}
          jslog=${l.action("hide-disabled-features-details").track({click:!0})}>${Te(Se.hideDetails)}
        </devtools-button>
        </div>
      </devtools-report-value>
    `}async#C(){await Ce.write("PermissionsPolicySection render",(()=>{s.render(ye`
          <devtools-report-section-header>${r.i18n.lockedString("Permissions Policy")}</devtools-report-section-header>
          ${this.#Y()}
          ${s.Directives.until(this.#Q(),s.nothing)}
          <devtools-report-divider></devtools-report-divider>
        `,this.#e,{host:this})}))}}customElements.define("devtools-resources-permissions-policy-section",Re);const{html:Pe}=s,Ie={additionalInformation:"Additional Information",thisAdditionalDebugging:"This additional (debugging) information is shown because the 'Protocol Monitor' experiment is enabled.",frameId:"Frame ID",document:"Document",url:"URL",clickToOpenInSourcesPanel:"Click to open in Sources panel",clickToOpenInNetworkPanel:"Click to open in Network panel",unreachableUrl:"Unreachable URL",clickToOpenInNetworkPanelMight:"Click to open in Network panel (might require page reload)",origin:"Origin",ownerElement:"Owner Element",clickToOpenInElementsPanel:"Click to open in Elements panel",adStatus:"Ad Status",rootDescription:"This frame has been identified as the root frame of an ad",root:"root",childDescription:"This frame has been identified as a child frame of an ad",child:"child",securityIsolation:"Security & Isolation",contentSecurityPolicy:"Content Security Policy (CSP)",secureContext:"Secure Context",yes:"Yes",no:"No",crossoriginIsolated:"Cross-Origin Isolated",localhostIsAlwaysASecureContext:"`Localhost` is always a secure context",aFrameAncestorIsAnInsecure:"A frame ancestor is an insecure context",theFramesSchemeIsInsecure:"The frame's scheme is insecure",reportingTo:"reporting to",apiAvailability:"API availability",availabilityOfCertainApisDepends:"Availability of certain APIs depends on the document being cross-origin isolated.",availableTransferable:"available, transferable",availableNotTransferable:"available, not transferable",unavailable:"unavailable",sharedarraybufferConstructorIs:"`SharedArrayBuffer` constructor is available and `SABs` can be transferred via `postMessage`",sharedarraybufferConstructorIsAvailable:"`SharedArrayBuffer` constructor is available but `SABs` cannot be transferred via `postMessage`",willRequireCrossoriginIsolated:"⚠️ will require cross-origin isolated context in the future",requiresCrossoriginIsolated:"requires cross-origin isolated context",transferRequiresCrossoriginIsolatedPermission:"`SharedArrayBuffer` transfer requires enabling the permission policy:",available:"available",thePerformanceAPI:"The `performance.measureUserAgentSpecificMemory()` API is available",thePerformancemeasureuseragentspecificmemory:"The `performance.measureUserAgentSpecificMemory()` API is not available",measureMemory:"Measure Memory",learnMore:"Learn more",creationStackTrace:"Frame Creation `Stack Trace`",creationStackTraceExplanation:"This frame was created programmatically. The `stack trace` shows where this happened.",parentIsAdExplanation:"This frame is considered an ad frame because its parent frame is an ad frame.",matchedBlockingRuleExplanation:"This frame is considered an ad frame because its current (or previous) main document is an ad resource.",createdByAdScriptExplanation:"There was an ad script in the `(async) stack` when this frame was created. Examining the creation `stack trace` of this frame might provide more insight.",creatorAdScript:"Creator Ad Script",none:"None",originTrialsExplanation:"Origin trials give you access to a new or experimental feature."},Me=r.i18n.registerUIStrings("panels/application/components/FrameDetailsView.ts",Ie),De=r.i18n.getLocalizedString.bind(void 0,Me),Be=n.RenderCoordinator.RenderCoordinator.instance();class Fe extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#Z;#ee;#te=!1;#re=null;#J={policies:[],showDetails:!1};#oe=new fe;#H=new i.Linkifier.Linkifier;#ae=null;constructor(e){super(),this.#Z=e,this.render()}connectedCallback(){this.parentElement?.classList.add("overflow-auto"),this.#te=h.Runtime.experiments.isEnabled("protocol-monitor"),this.#e.adoptedStyleSheets=[re]}async render(){this.#ae=await(this.#Z?.parentFrame()?.getAdScriptId(this.#Z?.id))||null;const e=this.#ae?.debuggerId?await o.DebuggerModel.DebuggerModel.modelForDebuggerId(this.#ae?.debuggerId):null;this.#ee=e?.target(),!this.#re&&this.#Z&&(this.#re=this.#Z.getPermissionsPolicyState()),await Be.write("FrameDetailsView render",(()=>{this.#Z&&s.render(Pe`
        <devtools-report .data=${{reportTitle:this.#Z.displayName()}}
        jslog=${l.pane("frames")}>
          ${this.#ne()}
          ${this.#ie()}
          ${this.#se()}
          ${this.#le()}
          ${s.Directives.until(this.#re?.then((e=>(this.#J.policies=e||[],Pe`
              <devtools-resources-permissions-policy-section
                .data=${this.#J}
              >
              </devtools-resources-permissions-policy-section>
            `))),s.nothing)}
          ${this.#te?this.#ce():s.nothing}
        </devtools-report>
      `,this.#e,{host:this})}))}#le(){return this.#Z?(this.#oe.classList.add("span-cols"),this.#Z.getOriginTrials().then((e=>{this.#oe.data={trials:e}})),Pe`
    <devtools-report-section-header>${r.i18n.lockedString("Origin trials")}</devtools-report-section-header>
    <div class="span-cols">
        ${De(Ie.originTrialsExplanation)}
        <x-link href="https://developer.chrome.com/docs/web-platform/origin-trials/" class="link"
        jslog=${l.link("learn-more.origin-trials").track({click:!0})}>${De(Ie.learnMore)}</x-link>
    </div>
    ${this.#oe}
    <devtools-report-divider></devtools-report-divider>
    `):s.nothing}#ne(){return this.#Z?Pe`
      <devtools-report-section-header>${De(Ie.document)}</devtools-report-section-header>
      <devtools-report-key>${De(Ie.url)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#de()}
          ${this.#he()}
          <div class="text-ellipsis" title=${this.#Z.url}>${this.#Z.url}</div>
        </div>
      </devtools-report-value>
      ${this.#ue()}
      ${this.#pe()}
      ${s.Directives.until(this.#ge(),s.nothing)}
      ${this.#me()}
      ${this.#ve()}
      <devtools-report-divider></devtools-report-divider>
    `:s.nothing}#de(){if(!this.#Z||this.#Z.unreachableUrl())return s.nothing;const e=this.#be(this.#Z);return $e("breakpoint-circle",De(Ie.clickToOpenInSourcesPanel),(()=>t.Revealer.reveal(e)),"reveal-in-sources")}#he(){if(this.#Z){const e=this.#Z.resourceForURL(this.#Z.url);if(e&&e.request){const r=e.request;return $e("arrow-up-down-circle",De(Ie.clickToOpenInNetworkPanel),(()=>{const e=p.UIRequestLocation.UIRequestLocation.tab(r,"headers-component");return t.Revealer.reveal(e)}),"reveal-in-network")}}return s.nothing}#be(e){for(const t of u.Workspace.WorkspaceImpl.instance().projects()){const r=c.NetworkProject.NetworkProject.getTargetForProject(t);if(r&&r===e.resourceTreeModel().target()){const r=t.uiSourceCodeForURL(e.url);if(r)return r}}return null}#ue(){return this.#Z&&this.#Z.unreachableUrl()?Pe`
      <devtools-report-key>${De(Ie.unreachableUrl)}</devtools-report-key>
      <devtools-report-value>
        <div class="inline-items">
          ${this.#fe()}
          <div class="text-ellipsis" title=${this.#Z.unreachableUrl()}>${this.#Z.unreachableUrl()}</div>
        </div>
      </devtools-report-value>
    `:s.nothing}#fe(){if(this.#Z){const e=t.ParsedURL.ParsedURL.fromString(this.#Z.unreachableUrl());if(e)return $e("arrow-up-down-circle",De(Ie.clickToOpenInNetworkPanelMight),(()=>{t.Revealer.reveal(p.UIFilter.UIRequestFilter.filters([{filterType:p.UIFilter.FilterType.Domain,filterValue:e.domain()},{filterType:null,filterValue:e.path}]))}),"unreachable-url.reveal-in-network")}return s.nothing}#pe(){return this.#Z&&this.#Z.securityOrigin&&"://"!==this.#Z.securityOrigin?Pe`
        <devtools-report-key>${De(Ie.origin)}</devtools-report-key>
        <devtools-report-value>
          <div class="text-ellipsis" title=${this.#Z.securityOrigin}>${this.#Z.securityOrigin}</div>
        </devtools-report-value>
      `:s.nothing}async#ge(){if(this.#Z){const e=await this.#Z.getOwnerDOMNodeOrDocument();if(e)return Pe`
          <devtools-report-key>${De(Ie.ownerElement)}</devtools-report-key>
          <devtools-report-value class="without-min-width">
            <div class="inline-items">
              <button class="link text-link" role="link" tabindex=0 title=${De(Ie.clickToOpenInElementsPanel)}
                @mouseenter=${()=>this.#Z?.highlight()}
                @mouseleave=${()=>o.OverlayModel.OverlayModel.hideDOMNodeHighlight()}
                @click=${()=>t.Revealer.reveal(e)}
                jslog=${l.action("reveal-in-elements").track({click:!0})}
              >
                &lt;${e.nodeName().toLocaleLowerCase()}&gt;
              </button>
            </div>
          </devtools-report-value>
        `}return s.nothing}#me(){const e=this.#Z?.getCreationStackTraceData();return e&&e.creationStackTrace?Pe`
        <devtools-report-key title=${De(Ie.creationStackTraceExplanation)}>${De(Ie.creationStackTrace)}</devtools-report-key>
        <devtools-report-value
        jslog=${l.section("frame-creation-stack-trace")}
        >
          <devtools-resources-stack-trace .data=${{frame:this.#Z,buildStackTraceRows:i.JSPresentationUtils.buildStackTraceRows}}>
          </devtools-resources-stack-trace>
        </devtools-report-value>
      `:s.nothing}#ke(e){switch(e){case"child":return{value:De(Ie.child),description:De(Ie.childDescription)};case"root":return{value:De(Ie.root),description:De(Ie.rootDescription)}}}#we(e){switch(e){case"CreatedByAdScript":return De(Ie.createdByAdScriptExplanation);case"MatchedBlockingRule":return De(Ie.matchedBlockingRuleExplanation);case"ParentIsAd":return De(Ie.parentIsAdExplanation)}}#ve(){if(!this.#Z)return s.nothing;const e=this.#Z.adFrameType();if("none"===e)return s.nothing;const t=this.#ke(e),r=[Pe`<div title=${t.description}>${t.value}</div>`];for(const e of this.#Z.adFrameStatus()?.explanations||[])r.push(Pe`<div>${this.#we(e)}</div>`);const o=this.#ee?this.#H.linkifyScriptLocation(this.#ee,this.#ae?.scriptId||null,d.DevToolsPath.EmptyUrlString,void 0,void 0):null;return Pe`
      <devtools-report-key>${De(Ie.adStatus)}</devtools-report-key>
      <devtools-report-value
      jslog=${l.section("ad-status")}>
        <devtools-expandable-list .data=${{rows:r,title:De(Ie.adStatus)}}></devtools-expandable-list></devtools-report-value>
      ${this.#ee?Pe`
        <devtools-report-key>${De(Ie.creatorAdScript)}</devtools-report-key>
        <devtools-report-value class="ad-script-link">${o?.setAttribute("jslog",`${l.link("ad-script").track({click:!0})}`)}</devtools-report-value>
      `:s.nothing}
    `}#ie(){return this.#Z?Pe`
      <devtools-report-section-header>${De(Ie.securityIsolation)}</devtools-report-section-header>
      <devtools-report-key>${De(Ie.secureContext)}</devtools-report-key>
      <devtools-report-value>
        ${this.#Z.isSecureContext()?De(Ie.yes):De(Ie.no)}\xA0${this.#ye()}
      </devtools-report-value>
      <devtools-report-key>${De(Ie.crossoriginIsolated)}</devtools-report-key>
      <devtools-report-value>
        ${this.#Z.isCrossOriginIsolated()?De(Ie.yes):De(Ie.no)}
      </devtools-report-value>
      ${s.Directives.until(this.#Se(),s.nothing)}
      <devtools-report-divider></devtools-report-divider>
    `:s.nothing}#ye(){const e=this.#xe();return e?Pe`<span class="inline-comment">${e}</span>`:s.nothing}#xe(){switch(this.#Z?.getSecureContextType()){case"Secure":return null;case"SecureLocalhost":return De(Ie.localhostIsAlwaysASecureContext);case"InsecureAncestor":return De(Ie.aFrameAncestorIsAnInsecure);case"InsecureScheme":return De(Ie.theFramesSchemeIsInsecure)}return null}async#Se(){if(this.#Z){const e=this.#Z.resourceTreeModel().target().model(o.NetworkManager.NetworkManager),t=e&&await e.getSecurityIsolationStatus(this.#Z.id);if(t)return Pe`
          ${this.#Te(t.coep,r.i18n.lockedString("Cross-Origin Embedder Policy (COEP)"),"None")}
          ${this.#Te(t.coop,r.i18n.lockedString("Cross-Origin Opener Policy (COOP)"),"UnsafeNone")}
          ${this.#Ce(t.csp)}
        `}return s.nothing}#Te(e,t,r){if(!e)return s.nothing;const o=e.value!==r,a=!o&&e.reportOnlyValue!==r,n=o?e.reportingEndpoint:e.reportOnlyReportingEndpoint;return Pe`
      <devtools-report-key>${t}</devtools-report-key>
      <devtools-report-value>
        ${o?e.value:e.reportOnlyValue}
        ${a?Pe`<span class="inline-comment">report-only</span>`:s.nothing}
        ${n?Pe`<span class="inline-name">${De(Ie.reportingTo)}</span>${n}`:s.nothing}
      </devtools-report-value>
    `}#$e(e){const t=new g.CspParser.CspParser(e).csp.directives,r=[];for(const e in t)r.push(Pe`<div><span class="bold">${e}</span>${": "+t[e]?.join(", ")}</div>`);return r}#Re(e){return Pe`
      <devtools-report-key>${e.isEnforced?r.i18n.lockedString("Content-Security-Policy"):Pe`${r.i18n.lockedString("Content-Security-Policy-Report-Only")}<devtools-button
          .iconName=${"help"}
          class='help-button'
          .variant=${"icon"}
          .size=${"SMALL"}
          @click=${()=>{window.location.href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only"}}
          jslog=${l.link("learn-more.csp-report-only").track({click:!0})}
          ></devtools-button>`}
      </devtools-report-key>
      <devtools-report-value>
        ${"HTTP"===e.source?r.i18n.lockedString("HTTP header"):r.i18n.lockedString("Meta tag")}
        ${this.#$e(e.effectiveDirectives)}
      </devtools-report-value>
    `}#Ce(e){return Pe`
      <devtools-report-divider></devtools-report-divider>
      <devtools-report-section-header>
        ${De(Ie.contentSecurityPolicy)}
      </devtools-report-section-header>
      ${e&&e.length?e.map((e=>this.#Re(e))):Pe`
        <devtools-report-key>${r.i18n.lockedString("Content-Security-Policy")}</devtools-report-key>
        <devtools-report-value>
          ${De(Ie.none)}
        </devtools-report-value>
      `}
    `}#se(){return this.#Z?Pe`
      <devtools-report-section-header>${De(Ie.apiAvailability)}</devtools-report-section-header>
      <div class="span-cols">
        ${De(Ie.availabilityOfCertainApisDepends)}
        <x-link href="https://web.dev/why-coop-coep/" class="link" jslog=${l.link("learn-more.coop-coep").track({click:!0})}>${De(Ie.learnMore)}</x-link>
      </div>
      ${this.#Pe()}
      ${this.#Ie()}
      <devtools-report-divider></devtools-report-divider>
    `:s.nothing}#Pe(){if(this.#Z){const e=this.#Z.getGatedAPIFeatures();if(e){const t=e.includes("SharedArrayBuffers"),r=t&&e.includes("SharedArrayBuffersTransferAllowed"),o=De(r?Ie.availableTransferable:t?Ie.availableNotTransferable:Ie.unavailable),a=r?De(Ie.sharedarraybufferConstructorIs):t?De(Ie.sharedarraybufferConstructorIsAvailable):"";function n(e){switch(e.getCrossOriginIsolatedContextType()){case"Isolated":return s.nothing;case"NotIsolated":return t?Pe`<span class="inline-comment">${De(Ie.willRequireCrossoriginIsolated)}</span>`:Pe`<span class="inline-comment">${De(Ie.requiresCrossoriginIsolated)}</span>`;case"NotIsolatedFeatureDisabled":if(!r)return Pe`<span class="inline-comment">${De(Ie.transferRequiresCrossoriginIsolatedPermission)} <code>cross-origin-isolated</code></span>`}return s.nothing}return Pe`
          <devtools-report-key>SharedArrayBuffers</devtools-report-key>
          <devtools-report-value title=${a}>
            ${o}\xA0${n(this.#Z)}
          </devtools-report-value>
        `}}return s.nothing}#Ie(){if(this.#Z){const e=this.#Z.isCrossOriginIsolated(),t=De(e?Ie.available:Ie.unavailable),r=De(e?Ie.thePerformanceAPI:Ie.thePerformancemeasureuseragentspecificmemory);return Pe`
        <devtools-report-key>${De(Ie.measureMemory)}</devtools-report-key>
        <devtools-report-value>
          <span title=${r}>${t}</span>\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=${l.link("learn-more.monitor-memory-usage").track({click:!0})}>${De(Ie.learnMore)}</x-link>
        </devtools-report-value>
      `}return s.nothing}#ce(){return this.#Z?Pe`
      <devtools-report-section-header
        title=${De(Ie.thisAdditionalDebugging)}
      >${De(Ie.additionalInformation)}</devtools-report-section-header>
      <devtools-report-key>${De(Ie.frameId)}</devtools-report-key>
      <devtools-report-value>
        <div class="text-ellipsis" title=${this.#Z.id}>${this.#Z.id}</div>
      </devtools-report-value>
      <devtools-report-divider></devtools-report-divider>
    `:s.nothing}}customElements.define("devtools-resources-frame-details-view",Fe);var Ee=Object.freeze({__proto__:null,FrameDetailsReportView:Fe});const Le=new CSSStyleSheet;Le.replaceSync(":host{padding:20px}.heading{font-size:15px}devtools-data-grid-controller{border:1px solid var(--sys-color-divider);margin-top:20px}.info-icon{vertical-align:text-bottom;height:14px}.no-events-message{margin-top:20px}\n/*# sourceURL=interestGroupAccessGrid.css */\n");const{html:Ne}=s,Ae={allInterestGroupStorageEvents:"All interest group storage events.",eventTime:"Event Time",eventType:"Access Type",groupOwner:"Owner",groupName:"Name",noEvents:"No interest group events recorded."},He=r.i18n.registerUIStrings("panels/application/components/InterestGroupAccessGrid.ts",Ae),Oe=r.i18n.getLocalizedString.bind(void 0,He);class We extends HTMLElement{#e=this.attachShadow({mode:"open"});#Me=[];connectedCallback(){this.#e.adoptedStyleSheets=[Le],this.#C()}set data(e){this.#Me=e,this.#C()}#C(){s.render(Ne`
      <div>
        <span class="heading">Interest Groups</span>
        <devtools-icon class="info-icon"
                       title=${Oe(Ae.allInterestGroupStorageEvents)}
                       .data=${{iconName:"info",color:"var(--icon-default)",width:"16px"}}>
        </devtools-icon>
        ${this.#De()}
      </div>
    `,this.#e,{host:this})}#De(){if(0===this.#Me.length)return Ne`<div class="no-events-message">${Oe(Ae.noEvents)}</div>`;const e={columns:[{id:"event-time",title:Oe(Ae.eventTime),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-type",title:Oe(Ae.eventType),widthWeighting:5,hideable:!1,visible:!0,sortable:!0},{id:"event-group-owner",title:Oe(Ae.groupOwner),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-group-name",title:Oe(Ae.groupName),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#Be(),initialSort:{columnId:"event-time",direction:"ASC"}};return Ne`
      <devtools-data-grid-controller .data=${e}></devtools-data-grid-controller>
    `}#Be(){return this.#Me.map((e=>({cells:[{columnId:"event-time",value:e.accessTime,renderer:this.#Fe.bind(this)},{columnId:"event-type",value:e.type},{columnId:"event-group-owner",value:e.ownerOrigin},{columnId:"event-group-name",value:e.name}]})))}#Fe(e){const t=new Date(1e3*e);return Ne`${t.toLocaleString()}`}}customElements.define("devtools-interest-group-access-grid",We);var Ue=Object.freeze({__proto__:null,InterestGroupAccessGrid:We,i18nString:Oe});const qe=new CSSStyleSheet;qe.replaceSync('*{box-sizing:border-box;min-width:0;min-height:0}:root{height:100%;overflow:hidden;interpolate-size:allow-keywords;--legacy-accent-color:#1a73e8;--legacy-accent-fg-color:#1a73e8;--legacy-accent-color-hover:#3b86e8;--legacy-accent-fg-color-hover:#1567d3;--legacy-active-control-bg-color:#5a5a5a;--legacy-focus-bg-color:hsl(214deg 40% 92%);--legacy-focus-ring-inactive-shadow-color:#e0e0e0;--legacy-input-validation-error:#db1600;--legacy-toolbar-hover-bg-color:#eaeaea;--legacy-selection-fg-color:#fff;--legacy-selection-bg-color:var(--legacy-accent-color);--legacy-selection-inactive-fg-color:#5a5a5a;--legacy-selection-inactive-bg-color:#dadada;--legacy-divider-border:1px solid var(--sys-color-divider);--legacy-focus-ring-inactive-shadow:0 0 0 1px var(--legacy-focus-ring-inactive-shadow-color);--legacy-focus-ring-active-shadow:0 0 0 1px var(--legacy-accent-color);--legacy-item-selection-bg-color:#cfe8fc;--legacy-item-selection-inactive-bg-color:#e0e0e0;--monospace-font-size:10px;--monospace-font-family:monospace;--source-code-font-size:11px;--source-code-font-family:monospace;--sys-motion-duration-short4:200ms;--sys-motion-duration-medium2:300ms;--sys-motion-duration-long2:500ms;--sys-motion-easing-emphasized:cubic-bezier(0.2,0,0,1);--sys-motion-easing-emphasized-decelerate:cubic-bezier(0.05,0.7,0.1,1);--sys-motion-easing-emphasized-accelerate:cubic-bezier(0.2,0,0,1);--default-font-family:".SFNSDisplay-Regular","Helvetica Neue","Lucida Grande",sans-serif}.theme-with-dark-background{color-scheme:dark;--legacy-accent-color:#0e639c;--legacy-accent-fg-color:#ccc;--legacy-accent-fg-color-hover:#fff;--legacy-accent-color-hover:rgb(17 119 187);--legacy-active-control-bg-color:#cdcdcd;--legacy-focus-bg-color:hsl(214deg 19% 27%);--legacy-focus-ring-inactive-shadow-color:#5a5a5a;--legacy-toolbar-hover-bg-color:#202020;--legacy-selection-fg-color:#cdcdcd;--legacy-selection-inactive-fg-color:#cdcdcd;--legacy-selection-inactive-bg-color:hsl(0deg 0% 28%);--legacy-focus-ring-inactive-shadow:0 0 0 1px var(--legacy-focus-ring-inactive-shadow-color);--legacy-item-selection-bg-color:hsl(207deg 88% 22%);--legacy-item-selection-inactive-bg-color:#454545}body{height:100%;width:100%;position:relative;overflow:hidden;margin:0;cursor:default;font-family:var(--default-font-family);font-size:12px;tab-size:4;user-select:none;color:var(--sys-color-on-surface);background:var(--sys-color-cdt-base-container)}.platform-linux{--default-font-family:"Google Sans Text","Google Sans",system-ui,sans-serif}.platform-mac{--default-font-family:system-ui,sans-serif}.platform-windows{--default-font-family:system-ui,sans-serif}:focus{outline-width:0}.platform-mac,\n:host-context(.platform-mac){--monospace-font-size:11px;--monospace-font-family:monospace;--source-code-font-size:11px;--source-code-font-family:monospace}.platform-windows,\n:host-context(.platform-windows){--monospace-font-size:12px;--monospace-font-family:monospace;--source-code-font-size:12px;--source-code-font-family:monospace}.platform-linux,\n:host-context(.platform-linux){--monospace-font-size:11px;--monospace-font-family:"Noto Sans Mono","DejaVu Sans Mono",monospace;--source-code-font-size:11px;--source-code-font-family:"Noto Sans Mono","DejaVu Sans Mono",monospace}.monospace{font-family:var(--monospace-font-family);font-size:var(--monospace-font-size)!important}.source-code{font-family:var(--source-code-font-family);font-size:var(--source-code-font-size)!important;white-space:pre-wrap}.source-code .devtools-link.text-button{max-width:100%;overflow:hidden;text-overflow:ellipsis}img{-webkit-user-drag:none}iframe,\na img{border:none}.fill{position:absolute;top:0;left:0;right:0;bottom:0}iframe.fill{width:100%;height:100%}.widget{position:relative;flex:auto;contain:style}.hbox{display:flex;flex-direction:row!important;position:relative}.vbox{display:flex;flex-direction:column!important;position:relative}.view-container > .toolbar{border-bottom:1px solid var(--sys-color-divider)}.flex-auto{flex:auto}.flex-none{flex:none}.flex-centered{display:flex;align-items:center;justify-content:center}.overflow-auto{overflow:auto;background-color:var(--sys-color-cdt-base-container)}iframe.widget{position:absolute;width:100%;height:100%;left:0;right:0;top:0;bottom:0}.hidden{display:none!important}.highlighted-search-result{border-radius:1px;background-color:var(--sys-color-yellow-container);outline:1px solid var(--sys-color-yellow-container)}.link{cursor:pointer;text-decoration:underline;color:var(--sys-color-primary);outline-offset:2px}button,\ninput,\nselect{font-family:inherit;font-size:inherit}select option,\nselect optgroup,\ninput{background-color:var(--sys-color-cdt-base-container)}input{color:inherit;&[type="checkbox"]{position:relative;outline:none;display:flex;align-items:center;justify-content:center;&:hover::after,\n    &:active::before{content:"";height:24px;width:24px;border-radius:var(--sys-shape-corner-full);position:absolute}&:not(.-theme-preserve){accent-color:var(--sys-color-primary-bright);color:var(--sys-color-on-primary)}&:not(:disabled):hover::after{background-color:var(--sys-color-state-hover-on-subtle)}&:not(:disabled):active::before{background-color:var(--sys-color-state-ripple-neutral-on-subtle)}&:not(:disabled):focus-visible::before{content:"";height:15px;width:15px;border-radius:5px;position:absolute;border:2px solid var(--sys-color-state-focus-ring)}&.small:hover::after,\n    &.small:active::before{height:12px;width:12px;border-radius:2px}}}input::placeholder{--override-input-placeholder-color:rgb(0 0 0/54%);color:var(--override-input-placeholder-color)}.theme-with-dark-background input::placeholder,\n:host-context(.theme-with-dark-background) input::placeholder{--override-input-placeholder-color:rgb(230 230 230/54%)}.harmony-input:not([type]),\n.harmony-input[type="number"],\n.harmony-input[type="text"]{padding:3px 6px;height:24px;border:1px solid var(--sys-color-neutral-outline);border-radius:4px;&.error-input,\n  &:invalid{border-color:var(--sys-color-error)}&:not(.error-input):not(:invalid):focus{border-color:var(--sys-color-state-focus-ring)}&:not(.error-input):not(:invalid):hover:not(:focus){background:var(--sys-color-state-hover-on-subtle)}}input[type="radio"]{height:17px;width:17px;min-width:17px;border-radius:8px;vertical-align:sub;margin:0 5px 5px 0;accent-color:var(--sys-color-primary-bright);color:var(--sys-color-on-primary);&:focus{box-shadow:var(--legacy-focus-ring-active-shadow)}}@media (forced-colors: active){input[type="radio"]{--gradient-start:ButtonFace;--gradient-end:ButtonFace;&:checked{--gradient-start:Highlight;--gradient-end:Highlight}}}input[type="range"]{appearance:none;margin:0;padding:0;height:10px;width:88px;outline:none;background:none}input[type="range"]::-webkit-slider-thumb,\n.-theme-preserve{appearance:none;margin:0;padding:0;border:0;width:12px;height:12px;margin-top:-5px;border-radius:50%;background-color:var(--sys-color-primary)}input[type="range"]::-webkit-slider-runnable-track{appearance:none;margin:0;padding:0;width:100%;height:2px;background-color:var(--sys-color-surface-variant)}input[type="range"]:focus::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--sys-color-inverse-primary)}input[type="range"]:disabled::-webkit-slider-thumb{background-color:var(--sys-color-state-disabled)}@media (forced-colors: active){input[type="range"]{forced-color-adjust:none}}.highlighted-search-result.current-search-result{--override-current-search-result-background-color:rgb(255 127 0/80%);border-radius:1px;padding:1px;margin:-1px;background-color:var(--override-current-search-result-background-color)}.dimmed{opacity:60%}.editing{box-shadow:var(--drop-shadow);background-color:var(--sys-color-cdt-base-container);text-overflow:clip!important;padding-left:2px;margin-left:-2px;padding-right:2px;margin-right:-2px;margin-bottom:-1px;padding-bottom:1px;opacity:100%!important}.editing,\n.editing *{color:var(--sys-color-on-surface)!important;text-decoration:none!important}.chrome-select{appearance:none;user-select:none;width:var(--sys-size-22);height:var(--sys-size-11);border:var(--sys-size-1) solid var(--sys-color-neutral-outline);border-radius:var(--sys-shape-corner-extra-small);color:var(--sys-color-on-surface);font:inherit;margin:0;outline:none;padding:0 var(--sys-size-9) 0 var(--sys-size-5);background-image:var(--combobox-dropdown-arrow);background-color:transparent;background-position:right center;background-repeat:no-repeat}.chrome-select:disabled{opacity:100%;border:var(--sys-size-1) solid transparent;color:var(--sys-color-state-disabled);background-color:var(--sys-color-state-disabled-container)}.chrome-select:enabled{&:hover{background-color:var(--sys-color-state-hover-on-subtle)}&:active{background-color:var(--sys-color-state-ripple-neutral-on-subtle)}&:hover:active{background:var(--combobox-dropdown-arrow),linear-gradient(var(--sys-color-state-hover-on-subtle),var(--sys-color-state-hover-on-subtle)),linear-gradient(var(--sys-color-state-ripple-neutral-on-subtle),var(--sys-color-state-ripple-neutral-on-subtle));background-position:right center;background-repeat:no-repeat}&:focus{outline:var(--sys-size-2) solid var(--sys-color-state-focus-ring);outline-offset:-1px}}@media (forced-colors: active) and (prefers-color-scheme: light){:root,\n  .theme-with-dark-background,\n  :host-context(.theme-with-dark-background){--combobox-dropdown-arrow:var(--image-file-arrow-drop-down-light)}}@media (forced-colors: active) and (prefers-color-scheme: dark){:root,\n  .theme-with-dark-background,\n  :host-context(.theme-with-dark-background){--combobox-dropdown-arrow:var(--image-file-arrow-drop-down-dark)}}.chrome-select-label{margin:0 var(--sys-size-10);flex:none;p p{margin-top:0;color:var(--sys-color-token-subtle)}.reload-warning{margin-left:var(--sys-size-5)}}.settings-select{margin:0}.chrome-select optgroup,\n.chrome-select option{background-color:var(--sys-color-cdt-base-container);color:var(--sys-color-on-surface)}.gray-info-message{text-align:center;font-style:italic;padding:6px;color:var(--sys-color-token-subtle);white-space:nowrap}dt-icon-label{flex:none}.full-widget-dimmed-banner a{color:inherit}.full-widget-dimmed-banner{color:var(--sys-color-token-subtle);background-color:var(--sys-color-cdt-base-container);display:flex;justify-content:center;align-items:center;text-align:center;padding:20px;position:absolute;top:0;right:0;bottom:0;left:0;font-size:13px;overflow:auto;z-index:500}.dot::before{content:var(--image-file-empty);width:6px;height:6px;border-radius:50%;outline:1px solid var(--icon-gap-default);left:9px;position:absolute;top:9px;z-index:1}.green::before{background-color:var(--sys-color-green-bright)}.purple::before{background-color:var(--sys-color-purple-bright)}.expandable-inline-button{background-color:var(--sys-color-cdt-base-container);color:var(--sys-color-on-surface);cursor:pointer;border-radius:3px}.undisplayable-text,\n.expandable-inline-button{border:none;padding:1px 3px;margin:0 2px;font-size:11px;font-family:sans-serif;white-space:nowrap;display:inline-block}.undisplayable-text::after,\n.expandable-inline-button::after{content:attr(data-text)}.undisplayable-text{color:var(--sys-color-state-disabled);font-style:italic}.expandable-inline-button:hover,\n.expandable-inline-button:focus-visible{background-color:var(--sys-color-state-hover-on-subtle)}.expandable-inline-button:focus-visible{background-color:var(--sys-color-state-focus-highlight)}::selection{background-color:var(--sys-color-state-text-highlight);color:var(--sys-color-state-on-text-highlight)}button.link{border:none;background:none;padding:3px}button.link:focus-visible{outline:2px solid var(--sys-color-state-focus-ring);outline-offset:2px;border-radius:var(--sys-shape-corner-full)}.theme-with-dark-background button.link:focus-visible,\n:host-context(.theme-with-dark-background) button.link:focus-visible{--override-link-focus-background-color:rgb(230 230 230/8%)}@media (forced-colors: active){.dimmed,\n  .chrome-select:disabled{opacity:100%}.harmony-input:not([type]),\n  .harmony-input[type="number"],\n  .harmony-input[type="text"]{border:1px solid ButtonText}.harmony-input:not([type]):focus,\n  .harmony-input[type="number"]:focus,\n  .harmony-input[type="text"]:focus{border:1px solid Highlight}}input.custom-search-input::-webkit-search-cancel-button{appearance:none;width:16px;height:15px;margin-right:0;opacity:70%;mask-image:var(--image-file-cross-circle-filled);mask-position:center;mask-repeat:no-repeat;mask-size:99%;background-color:var(--icon-default)}input.custom-search-input::-webkit-search-cancel-button:hover{opacity:99%}.spinner::before{display:block;width:var(--dimension,24px);height:var(--dimension,24px);border:var(--override-spinner-size,3px) solid var(--override-spinner-color,var(--sys-color-token-subtle));border-radius:12px;clip:rect(0,var(--clip-size,15px),var(--clip-size,15px),0);content:"";position:absolute;animation:spinner-animation 1s linear infinite;box-sizing:border-box}@keyframes spinner-animation{from{transform:rotate(0)}to{transform:rotate(360deg)}}.adorner-container{display:inline-flex;vertical-align:middle}.adorner-container.hidden{display:none}.adorner-container devtools-adorner{margin-left:3px}:host-context(.theme-with-dark-background) devtools-adorner{--override-adorner-border-color:var(--sys-color-tonal-outline);--override-adorner-focus-border-color:var(--sys-color-state-focus-ring);--override-adorner-active-background-color:var(--sys-color-state-riple-neutral-on-subtle)}.panel{display:flex;overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;z-index:0;background-color:var(--sys-color-cdt-base-container)}.panel-sidebar{overflow-x:hidden;background-color:var(--sys-color-cdt-base-container)}iframe.extension{flex:auto;width:100%;height:100%}iframe.panel.extension{display:block;height:100%}@media (forced-colors: active){:root{--legacy-accent-color:Highlight;--legacy-focus-ring-inactive-shadow-color:ButtonText}}\n/*# sourceURL=inspectorCommon.css */\n');const ze=new CSSStyleSheet;ze.replaceSync('.devtools-link{color:var(--sys-color-primary);text-decoration:underline;cursor:pointer;outline-offset:2px}.devtools-link:focus-visible{outline-width:unset}input.devtools-text-input[type="text"]{padding:3px 6px;margin-left:4px;margin-right:4px;width:250px;height:25px}input.devtools-text-input[type="text"]::placeholder{color:var(--sys-color-token-subtle)}.protocol-handlers-row{margin:10px 0 2px 18px}.inline-icon{margin-inline:4px;width:16px;height:16px;&[name="check-circle"]{color:var(--icon-checkmark-green)}}@media (forced-colors: active){.devtools-link:not(.devtools-link-prevent-click){color:linktext}.devtools-link:focus-visible{background:Highlight;color:HighlightText}}\n/*# sourceURL=protocolHandlersView.css */\n');const{html:je}=s,_e={protocolDetected:"Found valid protocol handler registration in the {PH1}. With the app installed, test the registered protocols.",protocolNotDetected:"Define protocol handlers in the {PH1} to register your app as a handler for custom protocols when your app is installed.",needHelpReadOur:"Need help? Read {PH1}.",protocolHandlerRegistrations:"URL protocol handler registration for PWAs",manifest:"manifest",testProtocol:"Test protocol",dropdownLabel:"Select protocol handler",textboxLabel:"Query parameter or endpoint for protocol handler",textboxPlaceholder:"Enter URL"},Ve=r.i18n.registerUIStrings("panels/application/components/ProtocolHandlersView.ts",_e),Ge=r.i18n.getLocalizedString.bind(void 0,Ve);class Ke extends HTMLElement{#e=this.attachShadow({mode:"open"});#Ee=[];#Le=d.DevToolsPath.EmptyUrlString;#Ne="";#Ae="";set data(e){const t=this.#Le!==e.manifestLink;this.#Ee=e.protocolHandlers,this.#Le=e.manifestLink,t&&this.#He()}#He(){this.#Ae="",this.#Ne=this.#Ee[0]?.protocol??"",this.#C()}#Oe(){const e=f.XLink.XLink.create(this.#Le,Ge(_e.manifest),void 0,void 0,"manifest"),t=this.#Ee.length>0?_e.protocolDetected:_e.protocolNotDetected;return je`
    <div class="protocol-handlers-row status">
            <devtools-icon class="inline-icon"
                                                name=${this.#Ee.length>0?"check-circle":"info"}>
            </devtools-icon>
            ${r.i18n.getFormatLocalizedString(Ve,t,{PH1:e})}
    </div>
    `}#We(){if(0===this.#Ee.length)return s.nothing;const e=this.#Ee.filter((e=>e.protocol)).map((e=>je`<option value=${e.protocol} jslog=${l.item(e.protocol).track({click:!0})}>${e.protocol}://</option>`));return je`
       <div class="protocol-handlers-row">
        <select class="chrome-select protocol-select" @change=${this.#Ue} aria-label=${Ge(_e.dropdownLabel)}>
           ${e}
        </select>
        <input .value=${this.#Ae} class="devtools-text-input" type="text" @change=${this.#qe} aria-label=${Ge(_e.textboxLabel)}
        placeholder=${Ge(_e.textboxPlaceholder)} />
        <devtools-button .variant=${"primary"} @click=${this.#ze}>
            ${Ge(_e.testProtocol)}
        </devtools-button>
        </div>
      `}#Ue=e=>{this.#Ne=e.target.value};#qe=e=>{this.#Ae=e.target.value,this.#C()};#ze=()=>{const e=`${this.#Ne}://${this.#Ae}`;v.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(e),v.userMetrics.actionTaken(v.UserMetrics.Action.CaptureTestProtocolClicked)};connectedCallback(){this.#e.adoptedStyleSheets=[ze,qe,b.textInputStyles]}#C(){const e=f.XLink.XLink.create("https://web.dev/url-protocol-handler/",Ge(_e.protocolHandlerRegistrations),void 0,void 0,"learn-more");s.render(je`
      ${this.#Oe()}
      <div class="protocol-handlers-row">
          ${r.i18n.getFormatLocalizedString(Ve,_e.needHelpReadOur,{PH1:e})}
      </div>
      ${this.#We()}
    `,this.#e,{host:this})}}customElements.define("devtools-protocol-handlers-view",Ke);var Je=Object.freeze({__proto__:null,ProtocolHandlersView:Ke});const Xe={noReportsToDisplay:"No reports to display",status:"Status",destination:"Destination",generatedAt:"Generated at"},Ye=r.i18n.registerUIStrings("panels/application/components/ReportsGrid.ts",Xe),Qe=r.i18n.getLocalizedString.bind(void 0,Ye),{render:Ze,html:et}=s;class tt extends HTMLElement{#e=this.attachShadow({mode:"open"});connectedCallback(){this.#e.adoptedStyleSheets=[H],this.#C()}#C(){Ze(et`
      ${Qe(Xe.status)}
      <x-link href="https://web.dev/reporting-api/#report-status"
      jslog=${l.link("report-status").track({click:!0})}>
        <devtools-icon class="inline-icon" .data=${{iconName:"help",color:"var(--icon-link)",width:"16px",height:"16px"}}></devtools-icon>
      </x-link>
    `,this.#e,{host:this})}}class rt extends HTMLElement{#e=this.attachShadow({mode:"open"});#je=[];#te=!1;connectedCallback(){this.#e.adoptedStyleSheets=[H],this.#te=h.Runtime.experiments.isEnabled("protocol-monitor"),this.#C()}set data(e){this.#je=e.reports,this.#C()}#C(){const e={columns:[{id:"url",title:r.i18n.lockedString("URL"),widthWeighting:30,hideable:!1,visible:!0},{id:"type",title:r.i18n.lockedString("Type"),widthWeighting:20,hideable:!1,visible:!0},{id:"status",title:Qe(Xe.status),widthWeighting:20,hideable:!1,visible:!0,titleElement:et`
          <devtools-resources-reports-grid-status-header></devtools-resources-reports-grid-status-header>
          `},{id:"destination",title:Qe(Xe.destination),widthWeighting:20,hideable:!1,visible:!0},{id:"timestamp",title:Qe(Xe.generatedAt),widthWeighting:20,hideable:!1,visible:!0},{id:"body",title:r.i18n.lockedString("Body"),widthWeighting:20,hideable:!1,visible:!0}],rows:this.#F()};this.#te&&e.columns.unshift({id:"id",title:"ID",widthWeighting:30,hideable:!1,visible:!0}),Ze(et`
      <div class="reporting-container" jslog=${l.section("reports")}>
        <div class="reporting-header">${r.i18n.lockedString("Reports")}</div>
        ${this.#je.length>0?et`
          <devtools-data-grid-controller .data=${e}>
          </devtools-data-grid-controller>
        `:et`
          <div class="reporting-placeholder">
            <div>${Qe(Xe.noReportsToDisplay)}</div>
          </div>
        `}
      </div>
    `,this.#e,{host:this})}#F(){return this.#je.map((e=>({cells:[{columnId:"id",value:e.id},{columnId:"url",value:e.initiatorUrl},{columnId:"type",value:e.type},{columnId:"status",value:e.status},{columnId:"destination",value:e.destination},{columnId:"timestamp",value:new Date(1e3*e.timestamp).toLocaleString()},{columnId:"body",value:JSON.stringify(e.body)}]})))}}customElements.define("devtools-resources-reports-grid-status-header",tt),customElements.define("devtools-resources-reports-grid",rt);var ot=Object.freeze({__proto__:null,ReportsGrid:rt,ReportsGridStatusHeader:tt,i18nString:Qe});const at=new CSSStyleSheet;at.replaceSync(":host{display:block;white-space:normal;max-width:400px}.router-rules{border:1px solid var(--sys-color-divider);border-spacing:0;padding-left:10px;padding-right:10px;line-height:initial;margin-top:0;padding-bottom:12px;text-wrap:balance}.router-rule{display:flex;margin-top:12px;flex-direction:column}.rule-id{color:var(--sys-color-token-subtle)}.item{display:flex;flex-direction:column;padding-left:10px}.condition,\n.source{list-style:none;display:flex;margin-top:4px;flex-direction:row}.condition > *,\n.source > *{word-break:break-all;line-height:1.5em}.rule-type{flex:0 0 18%}\n/*# sourceURL=serviceWorkerRouterView.css */\n");const{html:nt,render:it}=s;class st extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#_e=[];connectedCallback(){this.#e.adoptedStyleSheets=[at]}update(e){this.#_e=e,this.#_e.length>0&&this.#C()}#C(){it(nt`
      <ul class="router-rules">
        ${this.#_e.map(this.#Ve)}
      </ul>
    `,this.#e,{host:this})}#Ve(e){return nt`
      <li class="router-rule">
        <div class="rule-id">Rule ${e.id}</div>
        <ul class="item">
          <li class="condition">
            <div class="rule-type">Condition</div>
            <div class="rule-value">${e.condition}</div>
          </li>
          <li class="source">
            <div class="rule-type">Source</div>
            <div class="rule-value">${e.source}</div>
          </li>
        </ul>
      </li>
    `}}customElements.define("devtools-service-worker-router-view",st);var lt=Object.freeze({__proto__:null,ServiceWorkerRouterView:st});const ct=new CSSStyleSheet;ct.replaceSync(":host{padding:20px}.heading{font-size:15px}devtools-data-grid-controller{border:1px solid var(--sys-color-divider);margin-top:20px}.info-icon{vertical-align:text-bottom;height:14px}.no-events-message{margin-top:20px}\n/*# sourceURL=sharedStorageAccessGrid.css */\n");const{html:dt}=s,ht={sharedStorage:"Shared storage",allSharedStorageEvents:"All shared storage events for this page.",eventTime:"Event Time",eventType:"Access Type",mainFrameId:"Main Frame ID",ownerOrigin:"Owner Origin",eventParams:"Optional Event Params",noEvents:"No shared storage events recorded."},ut=r.i18n.registerUIStrings("panels/application/components/SharedStorageAccessGrid.ts",ht),pt=r.i18n.getLocalizedString.bind(void 0,ut);class gt extends HTMLElement{#e=this.attachShadow({mode:"open"});#Me=[];connectedCallback(){this.#e.adoptedStyleSheets=[ct],this.#C()}set data(e){this.#Me=e,this.#C()}#C(){s.render(dt`
      <div>
        <span class="heading">${pt(ht.sharedStorage)}</span>
        <devtools-icon class="info-icon"
                       title=${pt(ht.allSharedStorageEvents)}
                       .data=${{iconName:"info",color:"var(--icon-default)",width:"16px"}}>
        </devtools-icon>
        ${this.#De()}
      </div>
    `,this.#e,{host:this})}#De(){if(0===this.#Me.length)return dt`<div
        class="no-events-message">${pt(ht.noEvents)}</div>`;const e={columns:[{id:"event-main-frame-id",title:pt(ht.mainFrameId),widthWeighting:10,hideable:!1,visible:!1,sortable:!1},{id:"event-time",title:pt(ht.eventTime),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-type",title:pt(ht.eventType),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-owner-origin",title:pt(ht.ownerOrigin),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"event-params",title:pt(ht.eventParams),widthWeighting:10,hideable:!1,visible:!0,sortable:!0}],rows:this.#Be(),initialSort:{columnId:"event-time",direction:"ASC"}};return dt`
      <devtools-data-grid-controller .data=${e}></devtools-data-grid-controller>
    `}#Be(){return this.#Me.map((e=>({cells:[{columnId:"event-main-frame-id",value:e.mainFrameId},{columnId:"event-time",value:e.accessTime,renderer:this.#Fe.bind(this)},{columnId:"event-type",value:e.type},{columnId:"event-owner-origin",value:e.ownerOrigin},{columnId:"event-params",value:JSON.stringify(e.params)}]})))}#Fe(e){const t=new Date(1e3*e);return dt`${t.toLocaleString()}`}}customElements.define("devtools-shared-storage-access-grid",gt);var mt=Object.freeze({__proto__:null,SharedStorageAccessGrid:gt,i18nString:pt});const vt=new CSSStyleSheet;vt.replaceSync(".text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}devtools-icon{vertical-align:text-bottom;margin-left:2px;width:16px;height:16px}devtools-button{vertical-align:sub}\n/*# sourceURL=sharedStorageMetadataView.css */\n");const{html:bt}=s,ft={origin:"Origin",topLevelSite:"Top-level site",opaque:"(opaque)",isOpaque:"Is opaque",isThirdParty:"Is third-party",yes:"Yes",no:"No",yesBecauseTopLevelIsOpaque:"Yes, because the top-level site is opaque",yesBecauseKeyIsOpaque:"Yes, because the storage key is opaque",yesBecauseOriginNotInTopLevelSite:"Yes, because the origin is outside of the top-level site",yesBecauseAncestorChainHasCrossSite:"Yes, because the ancestry chain contains a third-party origin",loading:"Loading…",bucketName:"Bucket name",defaultBucket:"Default bucket",persistent:"Is persistent",durability:"Durability",quota:"Quota",expiration:"Expiration",none:"None",deleteBucket:"Delete bucket",confirmBucketDeletion:'Delete the "{PH1}" bucket?'},kt=r.i18n.registerUIStrings("panels/application/components/StorageMetadataView.ts",ft),wt=r.i18n.getLocalizedString.bind(void 0,kt),yt=n.RenderCoordinator.RenderCoordinator.instance();class St extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#Ge;#Ke=null;#Je=null;getShadow(){return this.#e}setStorageKey(e){this.#Ke=o.StorageKeyManager.parseStorageKey(e),this.render()}setStorageBucket(e){this.#Je=e,this.setStorageKey(e.bucket.storageKey)}enableStorageBucketControls(e){this.#Ge=e,this.#Ke&&this.render()}render(){return yt.write("StorageMetadataView render",(async()=>{s.render(bt`
        <devtools-report .data=${{reportTitle:this.getTitle()??wt(ft.loading)}}>
          ${await this.renderReportContent()}
        </devtools-report>`,this.#e,{host:this})}))}getTitle(){if(!this.#Ke)return;const e=this.#Ke.origin,t=this.#Je?.bucket.name||wt(ft.defaultBucket);return this.#Ge?`${t} - ${e}`:e}key(e){return bt`<devtools-report-key>${e}</devtools-report-key>`}value(e){return bt`<devtools-report-value>${e}</devtools-report-value>`}async renderReportContent(){if(!this.#Ke)return s.nothing;const e=this.#Ke.origin,t=Boolean(this.#Ke.components.get("3")),r=Boolean(this.#Ke.components.get("1")),o=Boolean(this.#Ke.components.get("4")),a=this.#Ke.components.get("0"),n=t?wt(ft.yesBecauseAncestorChainHasCrossSite):r?wt(ft.yesBecauseKeyIsOpaque):o?wt(ft.yesBecauseTopLevelIsOpaque):a&&e!==a?wt(ft.yesBecauseOriginNotInTopLevelSite):null;return bt`
        ${this.key(wt(ft.origin))}
        ${this.value(bt`<div class="text-ellipsis" title=${e}>${e}</div>`)}
        ${a||o?this.key(wt(ft.topLevelSite)):s.nothing}
        ${a?this.value(a):s.nothing}
        ${o?this.value(wt(ft.opaque)):s.nothing}
        ${n?bt`${this.key(wt(ft.isThirdParty))}${this.value(n)}`:s.nothing}
        ${r||o?this.key(wt(ft.isOpaque)):s.nothing}
        ${r?this.value(wt(ft.yes)):s.nothing}
        ${o?this.value(wt(ft.yesBecauseTopLevelIsOpaque)):s.nothing}
        ${this.#Je?this.#Xe():s.nothing}
        ${this.#Ge?this.#Ye():s.nothing}`}#Xe(){if(!this.#Je)throw new Error("Should not call #renderStorageBucketInfo if #bucket is null.");const{bucket:{name:e},persistent:t,durability:o,quota:a}=this.#Je;return bt`
      ${this.key(wt(ft.bucketName))}
      ${this.value(e||"default")}
      ${this.key(wt(ft.persistent))}
      ${this.value(wt(t?ft.yes:ft.no))}
      ${this.key(wt(ft.durability))}
      ${this.value(o)}
      ${this.key(wt(ft.quota))}
      ${this.value(r.ByteUtilities.bytesToString(a))}
      ${this.key(wt(ft.expiration))}
      ${this.value(this.#Qe())}`}#Qe(){if(!this.#Je)throw new Error("Should not call #getExpirationString if #bucket is null.");const{expiration:e}=this.#Je;return 0===e?wt(ft.none):new Date(1e3*e).toLocaleString()}#Ye(){return bt`
      <devtools-report-section>
        <devtools-button
          aria-label=${wt(ft.deleteBucket)}
          .variant=${"primary"}
          @click=${this.#Ze}>
          ${wt(ft.deleteBucket)}
        </devtools-button>
      </devtools-report-section>`}async#Ze(){if(!this.#Ge||!this.#Je)throw new Error("Should not call #deleteBucket if #storageBucketsModel or #storageBucket is null.");await f.UIUtils.ConfirmDialog.show(wt(ft.confirmBucketDeletion,{PH1:this.#Je.bucket.name||""}),this,{jslogContext:"delete-bucket-confirmation"})&&this.#Ge.deleteBucket(this.#Je.bucket)}}customElements.define("devtools-storage-metadata-view",St);var xt=Object.freeze({__proto__:null,StorageMetadataView:St});const{html:Tt}=s,Ct={sharedStorage:"Shared storage",creation:"Creation Time",notYetCreated:"Not yet created",numEntries:"Number of Entries",entropyBudget:"Entropy Budget for Fenced Frames",budgetExplanation:"Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy",resetBudget:"Reset Budget",numBytesUsed:"Number of Bytes Used"},$t=r.i18n.registerUIStrings("panels/application/components/SharedStorageMetadataView.ts",Ct),Rt=r.i18n.getLocalizedString.bind(void 0,$t);class Pt extends St{#et;#tt=null;#rt=0;#ot=0;#at=0;constructor(e,t){super(),this.#et=e,this.classList.add("overflow-auto"),this.setStorageKey(t)}async#nt(){await this.#et.resetBudget(),await this.render()}connectedCallback(){this.getShadow().adoptedStyleSheets=[vt]}getTitle(){return Rt(Ct.sharedStorage)}async renderReportContent(){const e=await this.#et.getMetadata();return this.#tt=e?.creationTime??null,this.#rt=e?.length??0,this.#ot=e?.bytesUsed??0,this.#at=e?.remainingBudget??0,Tt`
      ${await super.renderReportContent()}
      ${this.key(Rt(Ct.creation))}
      ${this.value(this.#it())}
      ${this.key(Rt(Ct.numEntries))}
      ${this.value(String(this.#rt))}
      ${this.key(Rt(Ct.numBytesUsed))}
      ${this.value(String(this.#ot))}
      ${this.key(Tt`${Rt(Ct.entropyBudget)}<devtools-icon name="info" title=${Rt(Ct.budgetExplanation)}></devtools-icon>`)}
      ${this.value(Tt`${this.#at}${this.#st()}`)}`}#it(){if(!this.#tt)return Tt`${Rt(Ct.notYetCreated)}`;const e=new Date(1e3*this.#tt);return Tt`${e.toLocaleString()}`}#st(){return Tt`
      <devtools-button .iconName=${"undo"}
                       .jslogContext=${"reset-entropy-budget"}
                       .size=${"SMALL"}
                       .title=${Rt(Ct.resetBudget)}
                       .variant=${"icon"}
                       @click=${this.#nt.bind(this)}></devtools-button>
    `}}customElements.define("devtools-shared-storage-metadata-view",Pt);var It=Object.freeze({__proto__:null,SharedStorageMetadataView:Pt});const Mt=new CSSStyleSheet;Mt.replaceSync(":host{padding:20px}.heading{font-size:15px}devtools-data-grid-controller{border:1px solid var(--sys-color-divider);margin-top:20px;& devtools-button{width:14px;height:14px}}devtools-icon{width:14px;height:14px}.no-tt-message{margin-top:20px}\n/*# sourceURL=trustTokensView.css */\n");const{html:Dt}=s,Bt={issuer:"Issuer",storedTokenCount:"Stored token count",allStoredTrustTokensAvailableIn:"All stored private state tokens available in this browser instance.",noTrustTokensStored:"No private state tokens are currently stored.",deleteTrustTokens:"Delete all stored private state tokens issued by {PH1}.",trustTokens:"Private state tokens"},Ft=r.i18n.registerUIStrings("panels/application/components/TrustTokensView.ts",Bt),Et=r.i18n.getLocalizedString.bind(void 0,Ft),Lt=n.RenderCoordinator.RenderCoordinator.instance();class Nt extends a.LegacyWrapper.WrappableComponent{#e=this.attachShadow({mode:"open"});#lt(e){const t=o.TargetManager.TargetManager.instance().primaryPageTarget();t?.storageAgent().invoke_clearTrustTokens({issuerOrigin:e})}connectedCallback(){this.wrapper?.contentElement.classList.add("vbox"),this.#e.adoptedStyleSheets=[Mt],this.render()}async render(){const e=o.TargetManager.TargetManager.instance().primaryPageTarget();if(!e)return;const{tokens:t}=await e.storageAgent().invoke_getTrustTokens();await Lt.write("Render TrustTokensView",(()=>{s.render(Dt`
        <div>
          <span class="heading">${Et(Bt.trustTokens)}</span>
          <devtools-icon name="info" title=${Et(Bt.allStoredTrustTokensAvailableIn)}></devtools-icon>
          ${this.#De(t)}
        </div>
      `,this.#e,{host:this}),this.isConnected&&setTimeout((()=>this.render()),1e3)}))}#De(e){if(0===e.length)return Dt`<div class="no-tt-message">${Et(Bt.noTrustTokensStored)}</div>`;const t={columns:[{id:"issuer",title:Et(Bt.issuer),widthWeighting:10,hideable:!1,visible:!0,sortable:!0},{id:"count",title:Et(Bt.storedTokenCount),widthWeighting:5,hideable:!1,visible:!0,sortable:!0},{id:"delete-button",title:"",widthWeighting:1,hideable:!1,visible:!0,sortable:!1}],rows:this.#ct(e),initialSort:{columnId:"issuer",direction:"ASC"}};return Dt`
      <devtools-data-grid-controller .data=${t}></devtools-data-grid-controller>
    `}#ct(e){return e.filter((e=>e.count>0)).map((e=>({cells:[{columnId:"delete-button",value:At(e.issuerOrigin),renderer:this.#dt.bind(this)},{columnId:"issuer",value:At(e.issuerOrigin)},{columnId:"count",value:e.count}]})))}#dt(e){return Dt`
      <devtools-button .iconName=${"bin"}
                       .jslogContext=${"delete-all"}
                       .size=${"SMALL"}
                       .title=${Et(Bt.deleteTrustTokens,{PH1:e})}
                       .variant=${"icon"}
                       @click=${this.#lt.bind(this,e)}></devtools-button>
    `}}function At(e){return e.replace(/\/$/,"")}customElements.define("devtools-trust-tokens-storage-view",Nt);var Ht=Object.freeze({__proto__:null,TrustTokensView:Nt,i18nString:Et});export{M as BackForwardCacheView,A as BounceTrackingMitigationsView,_ as EndpointsGrid,Ee as FrameDetailsView,Ue as InterestGroupAccessGrid,ke as OriginTrialTreeView,Je as ProtocolHandlersView,ot as ReportsGrid,lt as ServiceWorkerRouterView,mt as SharedStorageAccessGrid,It as SharedStorageMetadataView,te as StackTrace,xt as StorageMetadataView,Ht as TrustTokensView};
