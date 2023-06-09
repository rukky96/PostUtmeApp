'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b337302a8ac7ca5c28465d24b3d8a3ed",
".git/config": "c0c9634786944079c065cbed69a8ef3b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "87938b4603ab66e1aa76d93e9a5ded4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "456444e0ca66008ce6d4750179fcd05f",
".git/logs/refs/heads/main": "41447fb66969eb11e58df62853ecb960",
".git/logs/refs/remotes/origin/main": "91d707a54cc5c8ea99b219022e6063a5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/ba86c36f1022b2a829ae80d777ed81d8fbe654": "18c03e0a39a9784fc2ba0343fc7454dd",
".git/objects/0e/32af0add5d7335e0309c717896034d872e560d": "7ae4c0f54688d928cb97dcae97e2d790",
".git/objects/11/7924af3b786184a69e7a9ab7b95a69fd528fee": "02e672ae15096109fce331ff31755e61",
".git/objects/14/3e2eccd3cf02c1f47ea57b1621b72e4c3fdf71": "df6382e9f5f270f960f5e06dbd39345e",
".git/objects/19/9cdad909972b12327b83813c93a1ae7efad352": "f408bf3b2182f114b3efd9d056bfe665",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/7591fed4dcfc560abea009ae9d443341042169": "b03b844a9fd0e593f89c9e70c0ea574d",
".git/objects/27/02e7042f40ae712c6fd2f4f8f03759e8fe508e": "029f212b30a91d4db156718faf11cc94",
".git/objects/28/c1ae93850f208268994c75d4f830a4ba13a557": "9d70c76af4a6f33263dfc15c496eb6e9",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/32/8853c5703416428446168ad52c1d1e06a19d68": "22365b07ed794772ea37196407a9042c",
".git/objects/36/5192964dd6a6a86fce03434ffdcfc065a68b33": "1c1d34d9ca06e0720f87bd6f4cd51962",
".git/objects/37/11a0413e5d4cb3ca082b2e9b1ac0b28d5fa6cf": "ea3c9f8aa6e75cdb4b7eb971588796f4",
".git/objects/39/9799b3026ac2ad8849ee3d5f8db483a0455639": "2c6deda39e893ea97094739b5fcd35d8",
".git/objects/3a/a594bd75a798f23fca424ce50011ae78d11105": "9a1bb50d2bf12dd2671f1bdd310a2207",
".git/objects/3d/cccd02cb3750a12becae9946a371c6b89029ce": "d3e9d8f9244319020e4727062102654f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/96fcae8cc8603b496660fec299b1096041ca5c": "25398c6e67627305030d43311277c443",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/db726071518ccaa1d9786b490e188ffab50c21": "0621c8caaaa458b18ce2c0c3231e27df",
".git/objects/4d/8ed78a447c3995de01b640bfccb30183b3191e": "dee345830c9079f39416d84aa445bb37",
".git/objects/51/bef298b780dafa15cedfa0224908c5c112fad4": "caaaea14a57e5cac4a9feb949aa374e6",
".git/objects/53/c1da7a4220a09959494495116b712e077d2e18": "b43c548c1d8b90ecac44b2281ba670e8",
".git/objects/5c/686c155cf80a90a7af241466b426846258675a": "49e42df07f7da60202ba38ee6877ee1e",
".git/objects/5e/d2d4dae9e7f1cbead27cf40efa7d807d29e050": "4124561ffd83070e1297f98cc410289f",
".git/objects/60/b0f17eba98cb122c5270891a1f981be4a216df": "e464ec3200468b46e930f46e33220e16",
".git/objects/64/16f71895519f13d86a389552f2404164f26026": "149483ea98ed7f2d6018ca04975cd0f8",
".git/objects/65/73597f7d24fdbbba04d63a0b5965e54a729512": "ebcb52538e03483f7114fb27bd75eb19",
".git/objects/68/dea687104b0f469068de7d590d3026caad98fe": "38e19d3a898f51f6c7d30826a79ce648",
".git/objects/69/89a9cf6fd5ba76cbf5961860c2c345775ce2da": "317e9d14025dce8bf62ab3f799b97df3",
".git/objects/6a/c7a392e37f3569616df609b7bf7974565708a7": "5b8960ff86a72d1a64af4909f4f7220b",
".git/objects/6c/5208da57db47992073dcddd039d4e1449f1ba1": "9489917fd8135264f06b8f2ea69f2caf",
".git/objects/6e/5c48c53e405e98549a0b02bf5673819c22de7f": "8230c6bee7f30d2e6455afcf283c31dd",
".git/objects/6e/a5c5aca23c6258ee96069d19407d680a82ddb9": "30542710cc3160aa11792bc1b836f86a",
".git/objects/73/7ddd9647f29e65a89b80116a3576270c8a5f25": "aded103fc2bc2d08646a470f050c8a29",
".git/objects/77/2953f7fb7e2b401ea00257705895ef1f40a9f4": "e181d541af97856fc924af8618da0d4d",
".git/objects/78/8df0828a30c7202e351dab19d345dddf417e95": "1bc1edd8a24c7dd89f93eadb229d0726",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8cf3fcb8a36966cd63efebad85a61e294c0c52": "dd2e4e3a9446f5d332588e66982362ac",
".git/objects/7a/ce92ce08b821d155223cba75c8ccd399883076": "665b4b0883e151f778bda4cc3394554a",
".git/objects/7b/3ced0516e4a83f7f01ea029e660f6597f9d5af": "efffb539d65a2d91268d1f6ddea426ea",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/84/d5fa17431b31659cb31b859b9b8c20d29f87b9": "51eb7678e130a5fee0769623da04759f",
".git/objects/85/0732e3dd227b80a8c600575f0f7a822c4f3682": "45483d5de76275088a250817f05ca999",
".git/objects/85/9f93bdab503ecad7b59cc1664540339128fffe": "36ce5f82eb5913a1e326b64bae24d806",
".git/objects/86/f2e9d1ffc3b4bb3ce03e7a5a15f43a249cae9b": "b4e669a8ff390038476986e199b107f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/232f7dcf2e16236670ec029f630e3a0cc5fded": "07bf89abeb72a7fa87f2e86640718613",
".git/objects/89/9b3425f632b1bdfbf968ac17e600dedcda989c": "69666d65cc293b285ab4b79d55075dde",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/49937d345dd3c1ffac93c10b8ebdbd07a359eb": "e8654154b4c1d82c17407f15d9d09fdd",
".git/objects/92/925441dd4441ddc5f2a0d7c0b00bb54b9db987": "fe022193fbcf1ff1a4e3998be27335f2",
".git/objects/94/ace90e9071a511e8f1a4a56a578f80c373b558": "06adf8e64502526b49bf7bd198bea31a",
".git/objects/96/4d5331348b7415dda09fabe5557e19d001b9e9": "25ed50debe35811a6adeb5c048dd26dd",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/389b11fb898244710c17b78a6033b8e0407dc3": "bd1bf98b8592f714b88b3dd45bb4153d",
".git/objects/9a/15cc1bb0835c30634150d1d48b20a376a837ca": "32f449a3db7e310bb8bafedd91852f09",
".git/objects/9c/4009fbc626528fb274705c6ba3dcf8208515c7": "b3dea52364af2cbfdaac2d34d735496f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/34892e2cc280871a9574af41367dc15ffacbc6": "60252cf45808d4855688adb3240b3a3a",
".git/objects/a4/9e04a04264a457e42e71864a9eb2b68b980aac": "c8cd39826f91f43936f917cb51d25914",
".git/objects/a5/760cc01a09c69d3947cbc63018fabf8b05e4be": "1b49169e05983303ea14d5aa7a070d47",
".git/objects/a8/c642513fa15d5378ffd590647645ddc77fa652": "58aa2aafefe1865e6aedb9f6f5d8f3e7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b804271750a928d2299b943bde429a9aab4782": "61d422604688ddb21a80b964c8c788f4",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b3/44378a3a261afa756e87f69f885728847941c0": "f2d814ccb759b916d1ad97fafedfb788",
".git/objects/b6/946554de763dd945aa8df244b03d998a5d1b36": "bf545ee1a69eba33e6ca616eac2163bf",
".git/objects/b7/12dcbd6191f345a5ff6450c2a8778fbd42f445": "c9d58dfb69f3a9e5ff2d120debf900b4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/56a6934e9ed0a0b8e898077f7089ecd8cb8adb": "40c6457c5debcd6834fb1877511504ea",
".git/objects/b9/bc57613c22e4aa98d385125a9daf54f600852f": "e08306bbf37616941c48264b40fdc899",
".git/objects/bd/0188dfaddb66dbde0fc1d84dd7d719235d7ed0": "6bf15c48812f0858f19f86adb7e2be0d",
".git/objects/c3/04d092436567943aaf56d8937d5ea087fa9d01": "1778ce77eea3d54babb146dbbc49c7d4",
".git/objects/c6/b842e7612dc1181264bc49218050071aa3c394": "fe71c5ea6f1998c0a58ec1810c3ed6bb",
".git/objects/c9/994b428e12dcba295aa4612476d3484c88b6a4": "024d9d1ad1f4907e9c5fd1b0ac2102de",
".git/objects/c9/f2393a6e48f4cccca295c866ada451591141d5": "70cabfe3ec604f7ff952031655c237f7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/a9a1d4280e527efeb76ecbc75ccd5c3193ea58": "63538088a8555e27719d53381a04e6dc",
".git/objects/d3/341ccd188ffc259cbeb4c7600ad2532cdaded0": "d6ad2a9eb4e5171852da2a3832f7a6a7",
".git/objects/d5/2018527ea9c97842dc230e3fefe93f2eb9d7db": "875cae63f67090f66591324dea54499d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/0616283912742359801386db1792efadc3caa3": "6be0a6cdbef39c91d879596af2568db5",
".git/objects/dc/b4697bf41dca4014076a71b8c5bcc0d69c7eda": "1ab4f7d52f5eb028a82d91684c8ef544",
".git/objects/dd/10359bb0e9d6b9742e118706b29794a980086b": "b7499e28ae8229ca90c0e5bb2e52f059",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/ee39a67d217bbe0f50a33e785f3e2445641aef": "d1c552d50a508c42b524cba4e08598ef",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e3/3fa49ad87f016021cc0721ff8ea9d6ff2093c5": "51108573af8c9b48ebaf925eedf9bd38",
".git/objects/e4/955162287520edd3db8b9ae19053ca6ca05e4e": "22908f0f12c52978fc683ec45d4c7af0",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/bdc580c3b3e5c4143adf98681a3fd3e3443fdb": "8b1e55b181c9a7f271849b630911c6e6",
".git/objects/eb/19c0b063491789c6126b95c09fdfae20dc1183": "d30337aeac8f6971b9438fb14e67a785",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a12198b61aeac71d5969b305b9700b5a45da31": "b18082bc858368bdd5e39fdb09ac7700",
".git/objects/ed/bd9a2dc04f941a181295a73d782238431fe7e9": "82590d9f586c5f91a7d06ea6eeca1d22",
".git/objects/ee/3de3b2cfa238bfc50d28a35ebb4ece2e769af8": "a59c497ed45e8588e8068cbf12ec3f31",
".git/objects/f3/078f716231a2fd10506253cc0a9c78bc8330a2": "3c5b3da36bbc0b0cbd4447d1afccad72",
".git/objects/fc/80461ce2a5c9d16aebf365a140ff2ef6288994": "acb03c7a8ae88196fab87a922b3496b8",
".git/objects/fe/2521a531d027282f190613965dc330c560bd1e": "c59f5d3cf23d4c010db9b8b4d86791b4",
".git/objects/fe/c65e0883593a86b367618f3bf1dbad3d61eb29": "75d915166d68bf4ee0e09745b53434d8",
".git/refs/heads/main": "90bee92e0a648d14b0471bb65a6c2ac2",
".git/refs/remotes/origin/main": "90bee92e0a648d14b0471bb65a6c2ac2",
"assets/AssetManifest.json": "2a724cbabcf9b721f86e4a47a847efe9",
"assets/assets/images/aau.jpeg": "cbf6bcc69f768f7ab8f93953b87ec65a",
"assets/assets/images/aau.png": "014e5b40367cd5562873566ad00906ba",
"assets/assets/images/cbt.png": "a3f6c070731883d9501b4a18ad9fa60b",
"assets/assets/images/delsu.png": "cef8209f49718fbbe9cbbaebbdb22ad6",
"assets/assets/images/lasu.jpeg": "07611d2e7703d47a82bfdc3d30570b58",
"assets/assets/images/lasu.png": "4ea85c704179a8c774257038afc68630",
"assets/assets/images/ndu.png": "c77fa4a5c32008935fa63989cab8ba60",
"assets/assets/images/oau.png": "e62a1bb3eba8f470783ecdb5533a477f",
"assets/assets/images/postutme.jpeg": "b3a7071cdbdd46b716e9de8a3cb722a7",
"assets/assets/images/ui.png": "f5e89633d25e97c11e918e20a1e37af7",
"assets/assets/images/uniben.png": "a879fdbb13288827342c18d6e4be3e33",
"assets/assets/images/unical.png": "2e06ee3b77492a40e10b30bb3b9a7882",
"assets/assets/images/unilag.png": "1f74be97e768b6c4cb24680f4b449057",
"assets/assets/images/uniport.png": "4c1ca897264d0e3da0ec76128ae54c7a",
"assets/assets/images/unn.jpg": "a4281fccf741a22ce802e5d7103d97b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "42a1e16e8cb78e4c32f99e952a8fc075",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2bcfd3d87a69133502d93eec4d78ed14",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c63333f539b82acec08418db8ad9132",
"/": "2c63333f539b82acec08418db8ad9132",
"main.dart.js": "cf658d9bebf26a6ffa3468fe1c4dba83",
"manifest.json": "2eb7408be6c0dfe3c647bb460a6c8511",
"version.json": "146ce804174340b2783ef7c4b4110e32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
