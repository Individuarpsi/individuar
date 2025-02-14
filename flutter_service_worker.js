'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9d8981695f0c8a6823bc7de454a99416",
".git/config": "fb0d670cd54f09667486184a77b57315",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "abb74f7532fd3c6848a659ec3a05b88d",
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
".git/index": "d4871ef9e8ba704fb77829c3012f6aad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a026878145b86d57f7e7eb2b9ee341cf",
".git/logs/refs/heads/main": "89079b7ba675d00cfa9be6ae09cbad49",
".git/logs/refs/remotes/origin/main": "a0a7887f7baadf5c4e2316853c1a3329",
".git/objects/00/48f0c9ea3902727205402852666c4b3bbe4c8d": "4f392cb16520890b3a959cdf8eaca790",
".git/objects/00/646e00b97e3f3f6ddbf8c98c6716689345a707": "a2218dd74782139817982f33e8b63579",
".git/objects/01/80c2d461fab96d657f76b9c28deded7a491da8": "d2808f30bec4a6ebc07b9f0c083789f7",
".git/objects/03/b5b1a942755e53121c53ac71e4565b0c742a8f": "b9e15a0749341013e3c392b4d7b48170",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/04116949c40b90e2ba0144d72e1ca7a13b815f": "0e153f768523cb4df0ad0321fb6383e5",
".git/objects/0c/b79a2789aed43c23275b48cb80612e1f5ba242": "59442730687880b16cf202c9683ba98e",
".git/objects/0d/dc4f9ca0d10ab32674fa1bbd5c8743bf131e1f": "38075005aa2844734e9fa53b89928222",
".git/objects/0e/09f22ddcb347dad290de96719686cba82f4d0b": "a64b7ef1d4a7d251695e50e12e9f2b2a",
".git/objects/0e/96c21b5bcab96608dc8f136665f26914bc4df1": "e6cb376c92327d9432618effdb2f4999",
".git/objects/0f/fa777f9dc208033963c7562bd6f3fd632c8770": "5da71700c5e54b0fe4d73284e26cb991",
".git/objects/12/0a2e96e4e529818bca44d283cb11f7d7d585ab": "d5970d6543beae26f4474ad891dd86c1",
".git/objects/12/17657384f61131ea641b505d7ec4da8df42c68": "eb1f9a4b936e0cab175eec6973b61e83",
".git/objects/12/beb5292a1a5610a8ea2577a5706dde1ea0cdc8": "b630a8896bce0bc52d3b4a0b217f9430",
".git/objects/13/221f3e01fc5b376aafff8b6b6694470450825e": "a050051b9827a9224b46a9e07ddd5ed2",
".git/objects/13/22815aeae32ffc903be3481f97729217183a67": "2c1d1d6729266e774b061eda266299bc",
".git/objects/13/aee7ea9843d2ed6e9880da6cd515f145dad7f7": "0bbf76a8f39f88619133595d463db4d1",
".git/objects/14/ec70c3d65c763cb754ca5b38c02b1b4b11084f": "4fc6b478477d277537313aaae8ddd71d",
".git/objects/15/4ef427a4f95eda7120d0e6ac2ad3591ed1c067": "b9b4edc62c6df2623898fb7bfd9073ba",
".git/objects/17/4deb51ae78fe338dccd440d7019e37eb8e898f": "f9b07cba53ab71fadbb7fc378aec3250",
".git/objects/17/6e1fd04c8c49318c6b03cf6814e4e88191100f": "4346b9ffb53b3f1d9d7069bf075702e2",
".git/objects/17/c39241e5104b2a989bd4e83560b4c75ff3c5a2": "297b52f8c233a3d08774061ecf49de49",
".git/objects/18/09db09fc9423bc2db5c7476dd69d95ff1d9269": "9dc047f3e92675389f66241b0dec087b",
".git/objects/19/c0db7c70212577ccbcb2c4fa420088432bfd2e": "83fe4c8b076c6d7ab0d676000282e4b6",
".git/objects/1a/174f40d11dc3bbf882b8b1d937fdaa5ea85f81": "6564deb0ec221551c8e3a9db12a3045d",
".git/objects/1a/e6aa0cffb603c21c72153af03437a0c02e36b1": "8fc858a4633bade8d66b5780748a63cb",
".git/objects/1b/55d1c3e38a914836e86d92e95c6eb3ebd83297": "94944c143bf729e9159acec4a0329c7b",
".git/objects/1d/7b565b1f9f72cc412f59a25707bd80ba11b9a4": "4c650f3e86c86e78c0431b99626cbbb3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ac0750b8fb925c8a718b5672302be7ac333dbe": "90cdbb525bf9b49aa9d70328aff1dcbf",
".git/objects/1f/bac9e190083ce2581e1b245eb4a30f2c5eb434": "25ee5e46a1d43176cd835c53037f29db",
".git/objects/21/303909ee6a9f1e55e7657726beac4d23d2ac4d": "275e817ebb7650194adcb0cbfc8732a6",
".git/objects/21/404dbb06dd9d44e430dc794b0651020f97267b": "dcb0e8832e644ae2ae08aa64fb6d9b34",
".git/objects/22/7b68d523e2ede11409bc97a72819425713467c": "9e6131946bb5624c2c1b147f92f318af",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8701767a1badc23b4343286b5c272decc5a46c": "f7888a8821db910dea42bcde6f6adf95",
".git/objects/23/985baa998928efc4f272aa6d1ed398c8391116": "627593a80b02010c6e441f8787736a47",
".git/objects/23/b8343bcc7d755c3f0664df1e0f4b11878bdffc": "9618907d6f517723f2c0474e902981ca",
".git/objects/24/453a1a02bfbcfd4f55556eb73f62972b5d869b": "4342d38ec49c6f50c991e609b5a51ade",
".git/objects/26/2d5fc08c6f7d431b2209cde3f44afe8739099a": "01e6b6326a9bd47872ad4bdd74998130",
".git/objects/26/f3717c191525f2d963c21b5a72b4ffe01ae440": "317f386a5306b084648e21d183b04f31",
".git/objects/2a/2f26af510827e9197615bba9b05aa6c1fa30a1": "5cab9ea5b960b4f5bf48407c586b7636",
".git/objects/2a/7cef196f4a3e10a5cbf4faa3c59e8f4f0e6d18": "428b8a6b8150594a81c04b38ccbf78b9",
".git/objects/2b/af9811de5ca9845b8c7bac76cf5de11b305704": "f10585f75b85b2e3716a51af7ef72728",
".git/objects/2f/2c860f88e6a0edec44f8a6060cc68bb8cbe927": "4be76065a29abc647a5821faa49f2023",
".git/objects/2f/43398941c28f0f11acd649a8bc94f256e4b950": "eb623a6e09bfc63975526b687fb021c5",
".git/objects/30/219f196201e5d618fa99c22bd1ed4769b0c7e4": "ea1d66a61d0ce3bc33fb8d50318cc00b",
".git/objects/30/52a90a9fed7c4f5a07f2199f0098af3da38f1b": "7f79eac82048af8d859c40c3eabcfa14",
".git/objects/30/c91740c782c111e4f05bd691d48deb4f3aac43": "0b1a3189dd1548ec032cf327afcae162",
".git/objects/30/daec2717c0486ecf9c6ee0d194f8e9aeb17c96": "b470ac758be02165cb7000620024884b",
".git/objects/32/4019a9b29d96f07a0f08fdfe8f812d5cce9913": "c95a6fd39873778a93fc6a16da2dec64",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/b5da851806535309e123f0adc1342b32312ede": "523b83232d4eeb062e7aa62e9b53b8ce",
".git/objects/34/3d243facb2efb3619f4d68633ef0ad44495529": "e6ba3141a1eb60dfa132667a02530c34",
".git/objects/35/e6b5624645447b63c95127912f1e6e9c3571f4": "74727b70f44798e1cb7d906ef34b1bfd",
".git/objects/36/23a1a105e725655fd4d03a67d74e423a42f17e": "d7e40c66ee52cd68edf5ba7cbec87e94",
".git/objects/37/c881a8f8ce52ff7a8670c25b2bfae8c7645771": "b84f539b9f93a203f84751864eabe264",
".git/objects/38/8dfd58e9c268cd839a166f768dbffa245ea262": "8a277be9981e6701762a6ab228c88f98",
".git/objects/38/c5fb5db29a97c5ea60d439c3c8356d0553bb80": "e200a0e9a540537226a92f0024acaa98",
".git/objects/39/aa9fd0e99fd17a2cb11d743e2e28b6bf75dcc3": "aecb3b4f548f0f03c1cb2a58dd8d0cec",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/abefebe72e8f7711ceaa13eed73292b95539b2": "111d580af71ae0bb454902de1d4f1f72",
".git/objects/3b/537726fc7b8449923914dbf2df722292c6b48c": "02367360b59feece1913f30973a62bfd",
".git/objects/3b/6cbcbe4a9cbec47f9b3bf0adbc10cac3876e69": "91f8f52cf96d719b4086fabf8f168a75",
".git/objects/3b/c8b3039a19e9b93743bbe50b6e99673d0469a1": "11244adbec57b9b6ace296b13f108382",
".git/objects/3c/2d4c3ab2b613633e57872ff4799a3fff8ad863": "e090baf29cc1dd7320dab601c9ecd8db",
".git/objects/3c/4c25a5abf04891bb953bafe18340236c079e80": "948eae5c60aea09bc0983f93dc74498e",
".git/objects/3d/064f6fcd92f66434e0cbf11b35b496ad458a75": "3a46eac2bbba44f37deae5325101334d",
".git/objects/3d/bc28749feb31b95a62887fcd9b1fca14312876": "6fc480f29bd1970dc764e802cdf155a5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/47e1405f3c20686b46ed2879f49a977a1dcd3a": "89cf0b7b49a376132887d3d1d4f91a56",
".git/objects/40/7e1c2c5ef95763319deea15675687fd66ad0a5": "0102d7357b6be73ccf56c72da6dc2792",
".git/objects/41/5c7938afdb148d34324a394bc4a4fbcf9bdd09": "76abb2c3edc48ef0a788b043245896eb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/01127e37b28cfebf5abcfebf99223621472932": "5bd71db47775e15014c5923b0431bc0e",
".git/objects/47/36f20a8cf3dd703f4cfd96957619515c2d588e": "3e3a7e086cbc07cac0e1717b9ae868b9",
".git/objects/48/5a2a6cc965b01861b48e0b5f3f39038c026f59": "076cda80f0132f96b3673263d34763f8",
".git/objects/48/5e4500b7bd1963fb65f9ca3c2a35f30fc249ef": "30a0d14692083aceb8bfb918af8cd9a6",
".git/objects/48/bfe3a30219a9613c8aae5b6b0ef225d64f1241": "a167e59e8d6fe99cc49c0d41a4c060c8",
".git/objects/49/0615886db256d086b481bad4d354fc271274a8": "d4cf0dc9150d0da9385a5ff1b80f8536",
".git/objects/4a/25456a939023c6cb3d33f322e253366f4d56d7": "e7c0333aa5888d1eede70142d9157c79",
".git/objects/4b/55a694518940f9e79e132d3ef8764981efa4e0": "641b59052b01218bbc83038991df8594",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/9036d1c29ccc4c7199de7be528e6a1b6e688da": "bf1294d83fe42c6e5c7b34113d0b3fc0",
".git/objects/4b/dd7acc4720e478a2ccc2311de2da8dc6c05544": "2190f6797a6711418ede476824f6bda1",
".git/objects/4c/168ba9ae3cfca54f375a2cf5b878ebcb89494c": "e737ec5fc8494ca647383507f08d23b3",
".git/objects/4e/ef999cde76421991ae1711da6fa2ad946333f9": "9c698b6d176da35bd3d1558d36ea1f53",
".git/objects/4f/f9d1ae10be5e56e0e59b7b8e62de68c9c88f39": "7d29919223f856ecc7aff66d0f3b8392",
".git/objects/50/ca93a9691d8d93581b1c14c7a529daa38a4269": "15fb68bda7410d23565b2ebfc4f99eae",
".git/objects/50/e61fede086d13247e6a541524e81da6e201d6d": "810b536204b7bb17c9e5c9359bd962c7",
".git/objects/51/93fff943e90be5929cae8b90bfb1cef8ba62bc": "7bf1aa9014358e3a9c698dc399143cb8",
".git/objects/52/1166e2d98b30af1923dad81cecd38c5d4d2528": "e2e182e6bf00e2eb0f5dc240c66370d8",
".git/objects/52/e4a6f799c300eeb0ef926b9f5f3c77ea3bcf28": "3d04a98c0b3a8dbc6a0c8fac6dc35918",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/baaad9926a244660f6888a7dce0ef1d21738d8": "18e087df6c2c57cf11a11e1bb5ed268c",
".git/objects/57/47271ce316a90b964103931dc16cf9b3d675ed": "7f4feba7df5fbf13d38639510608394f",
".git/objects/58/0babd26b3f460300ce8bb9566543be5b8786bb": "96010841fac74ddfc0b287810ea4cf12",
".git/objects/58/e02dec6d52ed82d60db21ea49514388cac24b9": "0b2ae2b672ec75a50b906a028cd976b9",
".git/objects/5a/4ca74f44eb8777b7c3ac1fda1a45fe4aebd693": "d6913a840c6335b90bacce2d6a517a4b",
".git/objects/5a/d6ac6ee03284fae4709bac4b401441266c1eba": "f474ec59c1159b00f042828b4c6112e0",
".git/objects/5b/8f1eacfaffc25017f484207d4241b32a8fe763": "b38a78bdb04289487cefa3f586ad11f5",
".git/objects/5b/8ff50ebe58d258e1a29233f9e5d19f3edadffa": "f3f809f596a3db4bf15758823800d714",
".git/objects/5e/acbfaf39118baeadc3874e30d343c5fcdcbb78": "9a3b67c16bc373358acfb77dc106f1f1",
".git/objects/5f/ba55c6bd16c1bf29ead52058f3e644eefaef7f": "444e02d4384a1d2ac8464d08eba4b530",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/341689e02430ca3dfb4cb2168608178d7f5603": "b362e66e633bcfad242612a33e84b712",
".git/objects/61/f636cac13494038a02509962b84bfd078014a5": "a935174556fa974b81e48563367e2174",
".git/objects/63/786bae2d662b09e9d4c37692f68de9729724f6": "cb79bf5bc5ff6e0ca1220f439161a4f3",
".git/objects/63/b68a1ab8b261aacb5282d3402795e9cb84295f": "1f6a655d3270e20155f34db07e315536",
".git/objects/64/25e5d7a72706212c21d7e77c7772b402790fd3": "0e264df878d912d16080ff366f561a9a",
".git/objects/66/28e5454a1e23ffa253fed09d096f68f16b93f1": "cc839ea319ef24d0a24c9ee1966fdab0",
".git/objects/66/6691c98d2e7ae0b042b5860b3ed90d5aff719f": "480110758fe15231454fc68f8a23ade3",
".git/objects/67/eefbd07ed4d71d8ef40b51bdf0b93accdc0cec": "9ae4481744c80110f40e315752cf0d90",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/2380420371719e287e834fda5845612f74fb76": "8d22880a44412875c8d42a969e66e810",
".git/objects/6e/09b1ce8dd9270983f85a0a3a2839c4d52a3836": "3847f2999d5c44810603a3ee3366cae4",
".git/objects/6e/a164ac2f4052ae808c6559695741d018325deb": "5db5026abe5ae6ef5564b9392b7a548c",
".git/objects/6f/67888d89c6e82708e048c877239445858a8b52": "84097e7568f500904eedc49f07236536",
".git/objects/6f/addeeceff373284397497d29509b522f7b7325": "bf3b4a89a613af0934a93ac03a7a1078",
".git/objects/70/2570043a77c10ab281fbf88cf8c049b2569e0e": "5dc29c77540944b43b59b73508764d65",
".git/objects/71/77b8d9e2ed56fba7c7456278258eb09abcf4cf": "6e2772f6a328ef4efab127ff618f66f7",
".git/objects/71/da24bdd90f7ed5bd7d7394c39456173c5a29b3": "be6ecd85f9be834c5ded16a5d8433ad4",
".git/objects/74/d10a44ebcecac33f0569c8bfaa4b92466c47c2": "404d978fb3f409191a102d8bbc06510b",
".git/objects/75/c66a3657ba4dc34f86b859848b0254cf1b7246": "e1671caccc0483c12e72695835fdaadb",
".git/objects/76/bd396bf1ed0495673944cf5a14ce34e1532292": "425a612529dd10545c21d0c6022f1a20",
".git/objects/76/efe7bddc18a3a9d11d903cf32a9d22aafe4a53": "362a20865dce3941794265d098c3d891",
".git/objects/77/3f308d1a35a7243c235f86a6adb51621c7b892": "dd05573e2c543e969cac096f0bc480fd",
".git/objects/77/b00976e9b74958f2831ae0c3f3ce686cee394f": "978167165c387e6c7fe7b8c68a2c2bf6",
".git/objects/79/fa016220e5415f17b66dc6c77940e2561180b4": "0dc90c11870a4874b86f7f870cd06afd",
".git/objects/7a/87f1b6fe6ac5a511d603f593386e1b7c272f3f": "e278e859bfe48023229e8ca3cc0b68d4",
".git/objects/7b/cccda8a470bedc1ccd5b9450120e77ff197035": "244a0f4a49e600385bc9cd333ef14935",
".git/objects/7b/e726cbfa1a0b0cffc9792df7b9daedf494a424": "cc5bf56341e00c050a6832f2e05b2b39",
".git/objects/7c/5c34eb4935fe17fe7ed45c5e15e7d515bf93d7": "5bfd141f19b91f09cabe3424505e1a95",
".git/objects/7d/8034edfe53c541a290bbcdaf345106de35ffc3": "44cbeda63d1e5ac6fe1a82339a2b93ad",
".git/objects/7e/08458670fa6ca9018b35ad18686e5478ff9a4e": "f013c80b1513039dd748245206ff2da7",
".git/objects/7e/6e1371fd412f931ff06fdb823f7dea893ec8a8": "eff580359e13355b0fc5c6fe23b99b6e",
".git/objects/7f/e9e4d1ad1c86d3146a528754313c89899c4a93": "bb8a5ca012a22c96065c726d317e1817",
".git/objects/80/0246deb28e8ed7550a6b7a742230f6c9886f31": "cbece43ae3361b2abac8de43424042d1",
".git/objects/83/0006eeb492619b2dcc6b71d7fb54d3bcaeda5b": "578ef58f24551bc4e80e81a37b8cf45b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/b6e9b43749f1b39f5b7646652a56b78a91c6a7": "afe0d5c0d60424f3d2b2c212009eff55",
".git/objects/85/113fcbec92bfaa23e32f70b0b80272fbc51617": "3553c07872e379129b5198ec03c7d6b5",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03a3cf91202a54b6ac011a31be2738759f6d72": "831b0ec1a2326bd822378f5d9af72085",
".git/objects/86/567f025c171e47bb6bc1397e8cac1be95701c7": "43de13d4d2013ea78fec1cb738967967",
".git/objects/87/65df37cf0771dd46b71a817328a9fb56e39be1": "1f32e44ddb4a9f9c54c30d8b39fa7045",
".git/objects/87/b3134104c1fa046c930294b1e427f78704978e": "66e183e67c05e2697372bf1f6e3f379c",
".git/objects/88/4ab9ddb85b975674f32f22532a434586a91f6a": "d040b88bed1b04c2893754c776ccbf89",
".git/objects/88/55c49f8be75e06a07410b828495f4109041dfa": "6440e67567bd96a63900651c7fd105ea",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2f7e3c3fb2ea633e8e7bd66c2cd284c66272ba": "dddfc70888e915de0c0207a0aa12fcad",
".git/objects/89/f2556afc7cdc653a9b28823ec89413d7a55054": "4862c4b602e4419bd1e606411f37d32d",
".git/objects/8a/2223661bb3b641ab3b47d7aa80532daa65ae7b": "8699fe203f87d4bcefee3e608bebcb4f",
".git/objects/8a/f25320e2a2d63e2cdc11e8b1623c9111b87221": "e525325d0acf24b288bd7c5202f17cfb",
".git/objects/8a/fd0759311dedcc193019bb7f9202da28bbce35": "32e23fe95f901cb0b3bbc50c9214788c",
".git/objects/8c/be8bada7a7b4a74e2110a4936f10263d2930b9": "2ef54375ccd834f997b9b128c6064788",
".git/objects/8d/d8e40a905d3e66aadbdc71a7707f53f3f82ad4": "29fd4cfe6504951d5ef71dfd36805133",
".git/objects/90/5d3853cf5dae4052d4f5b0b8f8ac975f8f6152": "bc49f310dd89934ef7ea72ea4493b070",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/6b5c5ec0948952255d648ccaff33cb14f860e1": "cce2159443f5f49fdd63413dfe7eb3f9",
".git/objects/92/52a85d54e52c30a35b46195d9937cffe2c17fa": "22b5fa77d45bfeede14dca628b8b79ef",
".git/objects/93/251ac5d6be6e5b9aaf8b5e394c86b060eaea9c": "0c08efd7143e5d51b2966bba362ab38b",
".git/objects/93/f967da43c5712e63ef1b62db4378fa2191e626": "52a8b54c3198b6387877d7f699ce5eb7",
".git/objects/94/90e9f4c82a4525069d50408304256c7356153e": "d058a16f774faa8ac58be8d5b80003a2",
".git/objects/95/00cb52844e183588fe97811cc78ac179eaf79e": "1bc4341b8fcffac61695874fdf7c42e1",
".git/objects/95/afdeafc52c1bd3138a59bc647945286ea4220b": "2295cff70bbc458cbbfdaedc6c4ae160",
".git/objects/95/bdd59525da632ba1c1760201e4da09c2962ee0": "e95ec669257cae3b38f82fdb1694359a",
".git/objects/96/fad5286f68fc06af86ad959e2204c849bb2eda": "9f2a3b4d7132853d2c7055227d88b6e6",
".git/objects/97/46be00720fd3dbb3dea60ab67ede84852c2d48": "7c19bb1d97f59a8f7ce410bf096215a2",
".git/objects/97/ffb7c15125e5696674b30b3a1d7d338c4ea31f": "a332cd665f00aa354f3f450cc9cb50a4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/6abea4ab4c3a4032c93345e6c393e1a5cef6e8": "d8ad67fe4d4340aecbac20e0320a6e4f",
".git/objects/9a/4cbb4b9849c03fbc83d7de1281e8106826a421": "502321aee8a550b5f2c0ec7abe128971",
".git/objects/9b/5950943cf2db6b5a88d16f033c7fd41b25397c": "8621b5345585171476c40c8f3ac3cbd5",
".git/objects/9b/819fa746a1b40953fd60b6d31360037ff6afeb": "fd20ac952a67608d5fc8f7bb836efe45",
".git/objects/9c/b7c911f98ad1591750988974dfc8155b58b648": "9d3a35c9f395051fb3a5e26ad729d315",
".git/objects/9c/d2693ce07ea0267b77ab387e54182a6fca3cf0": "745b44173129ad821f3341e4c663b3c1",
".git/objects/9e/3be6e6e20773371340462b8ed8049412ed2ea7": "2f7160128ca31e6221f53d35b913eb8c",
".git/objects/9f/1fc15600f96abd27943dfb81160f21ddcbfa4f": "f3af63ce1710205dfbcb30fc8f62a0d4",
".git/objects/a2/38ccf12e2c920ec63f34ed2ed03dc36bba7b71": "7c1387a028a7a0efcb14852c03a947fe",
".git/objects/a2/946f89f70fe11907eef3904961c355d87275d6": "04837309445d7683d23477876defbd81",
".git/objects/a2/c5b1b84c15d57ce701e99d3b263d760d172046": "a27d97875c4c93591675451f7b4e8896",
".git/objects/a3/3a4ccb201f74ffce5c56a88d6db33d5eab04ca": "c5c15540b70ed8db46b8d6ff3d670073",
".git/objects/a3/51b37af8b7fe9a081d7323f08f974acff9fb52": "31099ab3702ea8fc2da86e2bb7c821ae",
".git/objects/a3/f59f3dbc8e64ac62ccaf8b1ca06c424135f9c3": "179a1bef9657887b01a7f0aab4cc9055",
".git/objects/a5/66cb8e829727391051db01fa73b48e7eae0211": "e67fcd1b4e2ba5e82016c939cf6bea20",
".git/objects/a5/bc1e86112a50c4822cf00742af6ca33188b6eb": "69b2e97b3f52bad3c6eb3f18d2a0a5cb",
".git/objects/a7/a3d35cd6fbee49b2b731e8d59607d7178d710f": "814ef8054c16cc16fe353f33ee0f8472",
".git/objects/a7/d1325a6dd69c175c63bbbb8c483c3806b946d0": "d9e5d300f766310cfb382c917568a582",
".git/objects/aa/56d6f7a29d06f7e861c392f79152470572b6e2": "fccb54719b323f85922cbe5704e68278",
".git/objects/ab/1e7c3711c6caf82a34dd63c11c63b925ca1796": "2f4ac58504e76ddbb69c2acee8a590a2",
".git/objects/ae/02bb53f93f6795733a7fe60bfa387da23e8edd": "3981b3581af4d94b6a7134daadef7dd7",
".git/objects/ae/df9ba6b82a615c8e071a141a43b7bd676ffe79": "3ef3ac8d20723742a7f3da3bd8de4607",
".git/objects/b0/15030313e842c3272903c5f20c0490d35baa2a": "f6fabf596df33d68dbeccbfe81f0dd0d",
".git/objects/b0/b8ebf525a21bef8f354a5db5cf2ab43aa66f75": "8244d8f9e08b7de298da506115fbf15c",
".git/objects/b1/359ecc8fe2355d25ed3853425a24a721a01233": "40e3c92c36c54bfa68ce660d203d1dc2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/ba54e2fa8ba2ab3f1d0417e81f4e62449f849b": "266aa48ed6e28b6565c44785e389f462",
".git/objects/b4/71ee128c8c1a5e9bc01cc5f603a90761e84f0d": "145cbed303df77606b12ac5805487009",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/42f83936de79dd0601f590c703ad621dda8ab5": "ebfccd5cb8cc4dd08eb3a351af893a26",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/94701552e7324b7fa3af34d9e4454bc2d1f6a8": "e7486fa9aa759df8475a60765afeb2b4",
".git/objects/bc/c1f27c741473e55378ac00d857a7a19a2a306d": "12e541201049c8211264199e4843f6b5",
".git/objects/bd/4e5acc788301b8075c87087f2d4d0894a77e80": "a56e02b74d4bd8b905c77f9bea7e41b5",
".git/objects/bd/69cdc39f83438ebbc8f37c33fb77ba4ea730a2": "81ef8a68c18eaf14bd925b5bfa92d420",
".git/objects/be/1928f50573734054b89aaa467941bbd92ec208": "1c1e425b404ad33a4ee2283a5c2c8eed",
".git/objects/be/2c5a48ad64f6a98ec6594a0ed3634296cd7b75": "74e75a937665cfc7aab53af34c91185a",
".git/objects/be/4888dab0c1e511fd1e2b60df1cad7de0516f21": "b04c19064abfde0fffff72920fce02bf",
".git/objects/bf/d1193f517b5656b768b5eb28c20d617e706053": "9d773073c7f5f0bd6ce043c06ca29849",
".git/objects/bf/e958d3c4553aa628a809820951f283beba3642": "7ba13c385adc18f24095b46fe7691d62",
".git/objects/c0/f7f61bf57efdf5c716bda316ab8f6470a8cd12": "486a1c0f1ce270ba235870e224674288",
".git/objects/c1/99fa588960bcdfd929b60cba053638d3f61e86": "92d5ae73463ac6eea5262ffa54da4735",
".git/objects/c1/f39ddf1ca3d7bed0af52d75fd1f4939ae9426b": "b7aba9f4f3bd49e4940e042e7f8ee2e5",
".git/objects/c3/2b097a83beccb96545aa77648ab00f8f7ea06b": "5b9dc198f75ea0a88128e622870f5982",
".git/objects/c3/6d12f9cac8dd26adcefa442a669d363dc08441": "19033a796c55e83811aa285b835768d0",
".git/objects/c3/ce229955ca54c452adfaef95e302d5da9faff6": "21d1effdf5d5e734cd84db3b65b3212c",
".git/objects/c4/adc1da17ebfc2e2d7dd866b4b0a39bc89e6f98": "273b0ceafbefe4e6c2574a2ce14a0427",
".git/objects/c7/67e5b27adc0b550abffb80318fc345ee41bec1": "d11e799a935efa6625a3140702a736a8",
".git/objects/c7/fe6eb68d8234e29fbc2a53c388a153ae298c6e": "88211c70772ebb8a4e2d8960611df83d",
".git/objects/c9/e5ee90de9eaa21cec2f143cbba757d192e2e94": "b9a785a4781b636321101a9715443b6f",
".git/objects/ca/7f865ecdfe91535a420e6d346d3bd2e3e7aa33": "86b99dde4fd8af5ace48f10d4105f5c0",
".git/objects/cc/baf9875d335ec28dfc6ea3dc09e56eb27b7cce": "17761d48455f103dd8334b4139000043",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/e03d3dab805870cd5914f709c0f9b7cd9f854d": "762a6039848ef5b9b60703560ece6539",
".git/objects/d2/b6194854714433728c51d024e49e9941577254": "791f52c98c3db7d4a9efa376c6d5281a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a369d6103979046b587ca861b15a669439b021": "54fc20d7fb3d7d473caec26ad14a7a16",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/d40f4ec4aa9430a7ac8983d8bab4704ade4a9c": "3b6f4c093321a1158aa752cbeaeb21a0",
".git/objects/d6/40de423d549d0f0068e75504669eecd03fb680": "faba80dd186b2bf33a3132b5b05f01fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b067f06a744206b3a38f372cee7cd548069983": "9fbc5c75a9fe863e9752c8a0f78a70c2",
".git/objects/d7/4cfd3bc91f824e32e770dc227e78410e021b3a": "7409caaed6f2f0e617c4ffc318281708",
".git/objects/d8/96573b06f303f32fc518d30057541c39ebee6b": "074d5da889488a6177d9874e104ee24f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/cbf3876fb4c1cf66ea7a83eb80d05eec55a4af": "804f0cb3603abe9fc58e325b559779f3",
".git/objects/db/e4a93a86847d0689cacd18cf1827d9f4e426ae": "76cda2f834e7e45e6c8ae2e6b7d72a2b",
".git/objects/dc/ac148d837578b9ce6b490d7f88ec829da0dc6e": "4cc99005d8e3d4c8dfbae22f91c4033f",
".git/objects/dc/de0272088f5f33eebe98282b5c60b848324798": "a8cc9688a13c020ca47e846804f8049c",
".git/objects/dd/daec3f5a6231dd45dfb592c4787fd4f1dab444": "160e3bbf5c5468dc8c465b96a67cf6e7",
".git/objects/de/5800d1edd794f2a57a2e0510ef2ea35a60ed0e": "ee5651962798f3b1a3cec689da55c8ae",
".git/objects/de/d7faf71d006ad1a9ea7fe477ac04aba999e640": "9cf8fb3159c0978b94c21c044592f642",
".git/objects/df/86b720fd1ef148821bf5019fd7d7735e3117af": "53e6306b2af8a84ec3e947200adf9db3",
".git/objects/df/a2652a49af337654730cfe148f32aabcdba6fe": "9040ede6bbb8763f688dcee51d8db227",
".git/objects/e1/5046bb0bb42d5d30c27e959ebed3c446acf200": "3bb7f44c0201c74382826b3ca8161292",
".git/objects/e4/159c0ac55d8e422809d174897eabe10714ff6d": "d3c2adcaf1ab7bdb32d503e42b66488e",
".git/objects/e4/3167a5c07322006fb14059692b4666f6b44b74": "30cc926f8eed00073229400c9bcd4043",
".git/objects/e4/dd2dddb2e89ab4cb1200011fc814d72775da34": "bf7f0e92e1e22d8ddad1d0564e02304f",
".git/objects/e5/3b227b632992ba1fd9e02ba482610136c7a143": "d50401f8ec55abedd09e863fd4186937",
".git/objects/e5/73fc59947028fcf355d702e1a53b633f1ba44f": "aee67585423b9929190385509a883c77",
".git/objects/e5/d86e85a38118fe07c4453a6648f4a6f22926b7": "78c5cf3c99001dea6ae0cf0da5b36683",
".git/objects/e6/956b05526bc5c28f27a0c024ea68da3bc28c20": "ab379a79c50df924e98220f7ee7c8041",
".git/objects/e6/a65db6e15c95ea8011c19cd0852aab997daa1e": "67d398d6ca11a55e36f68140ab73fe3c",
".git/objects/e7/4a1b4d4a1d639ca61e8814e229b285f312477f": "9846e451167dddc60be76f28a74c0812",
".git/objects/e7/5aef0d429fbeefe2aecd7e9a4db8440a296c36": "174bbdd9ff8c3ffd10efb13cc353090d",
".git/objects/e7/d9883be63118ac90b79bf09f8fbefa3c3e01a4": "481471e623d1546be97088255b1b1a8d",
".git/objects/e7/df3e51f634d811f405dd001e3b413de934c8b2": "e41c37a59327d2aeb5f3410eb67a9fa0",
".git/objects/e9/b2794ffcce3d5aeb2a6375ce56e7d5834f30da": "b3d6f9ac7353b54c14307ca2982134a3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/5a5bba7d0773d879e6b688e34ed838e7ffb5b9": "c21e5ac3350787b80b3746669e5ee086",
".git/objects/f0/0d393d0c478d2373abfd2f5278d415e37625e6": "bfc9d7158d49fa3c4f4adfe74bf4ba40",
".git/objects/f1/c4fda7698b0fac87a2f9d481864e72e64bd1f9": "2090c741d81f199baecb8ee4355807e8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3846d68255e3958d2c1b56ead41a714770d36f": "0766cf69a2d91b9ec47b44c05a59ce73",
".git/objects/f2/c3f5696ad0ca8a179bce9122dae151f422e20e": "714495580b3423ccefb02427a27198e1",
".git/objects/f7/374239d1ea25636c7d9a61f38fe6e58ecad2cf": "141c64626f62c43f3391a5f97f593d58",
".git/objects/fa/8ce530016bafc1d7e72ed584c8b3e4b4cc937b": "c9882f589f20efe85f021b52c47f94b7",
".git/objects/fb/f412ca4c0d0c6639ced26b3010a0bbba2b75e8": "787b237912a0e08cbaa25af9562c638d",
".git/objects/fc/350512d901ef96831ec6413593f66b3d29af53": "37f3dc12ca42570d61aa22811b04722b",
".git/objects/fc/43bcf84fb7c553198310efa56da209022a1131": "f42956dc3d19f1a69fec638f96a2ebe2",
".git/objects/fc/4caed682b50ea09af223de8dd91d3b29a44108": "c135edb9eb681e2f3df1234362fbdc78",
".git/objects/fd/3609fba56e0f25c05c4a8636265f855a15397a": "89b2aaff9e768b4e45420a672549f128",
".git/objects/fe/61836152f1efe99ed32e6a369c6249e514f3e6": "7ddd56dc3f07892936a3133a1f46fd13",
".git/objects/fe/b8d40cf3eaaab7c7a16a36d0f27625efc833bb": "c61b0969c7e210cdaccc0bd6eefdafbf",
".git/objects/ff/a54979cf31ae454c128dd753987d3053d5e1e8": "b6295f62a96526e2cf5d7b2632511777",
".git/ORIG_HEAD": "4c8b0a96050e95660cd41beb384b0220",
".git/refs/heads/main": "e640b50ed883fa4b053a63655ee8fe82",
".git/refs/remotes/origin/main": "e640b50ed883fa4b053a63655ee8fe82",
"assets/AssetManifest.bin": "24760979c84fd3d89687da88c225d8e9",
"assets/AssetManifest.bin.json": "66a8c4d2cddae11fc6bfce56ab8f7d75",
"assets/AssetManifest.json": "0d9670689f48d69aca1db8e5d969efdb",
"assets/assets/background_home.png": "7b61038bf8139b2c0236c9bf4545c296",
"assets/assets/courses_img.jpg": "fc667656396bf9ae69e3065bb1989e14",
"assets/assets/home_mobile.png": "4f71848c76736528e2be5905cea8f798",
"assets/assets/home_tablet.png": "f2edfbfdeda0df3f01a0dda81c8fde46",
"assets/assets/instagram_post_1.jpg": "dc50c6686f3cc215c9fa0d103b7855b7",
"assets/assets/instagram_post_2.jpg": "87a2ced8522f8996e7df2d6be3ee1ffa",
"assets/assets/instagram_post_3.jpg": "ab9a7257ed414f6e121f0c3255f077ff",
"assets/assets/instagram_post_4.jpg": "5470aded3cef3a7bea3c405f066b9cf2",
"assets/assets/mandala.png": "297ea5203014ebfa8ed3b1e6faae8c4a",
"assets/assets/mandala_left.png": "a9bf3797c9c29179745266f5653fdeed",
"assets/assets/quote.png": "20d67787cb8ad7d6c560b523272b493a",
"assets/assets/space_1.jpg": "d4d11c453f28db51185910dc1b7f5ec0",
"assets/assets/space_2.jpg": "dfd66c0f733730b322f39b89a837a024",
"assets/assets/space_3.jpg": "1aad3fa67599523371fb7b3397ccca09",
"assets/assets/staff_elso.jpg": "f3111287cad09600fcc45692bc8de41b",
"assets/assets/staff_elso_circle.png": "76b2004afa41fbd40cbf74dbd110e1b6",
"assets/assets/staff_emmanoel.jpeg": "edc59d65a8b2359857dbbccc8e1eb420",
"assets/assets/staff_emmanoel_circle.png": "80735cd238b2bc655c4d95bfa7f6bac6",
"assets/assets/staff_priscila.jpg": "01f6ef79f10d9f92ad99eb89bcc0ab3a",
"assets/assets/staff_priscila_circle.png": "f1b60b23b69673435671640c0cf0307f",
"assets/assets/testimonials_img.jpg": "0eeb65bfd44c550adf3b50f62b9555b5",
"assets/assets/testimonials_img_mobile.png": "d528f694c9afaf35f09b0593a0f6f8da",
"assets/assets/text_images.png": "d5cb25f53af0a4ed07ba79d6e6106b2c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "907f8b0ebf9b7b721760a69532af9181",
"assets/NOTICES": "87be8389cb63da0d25a886cab0c2a7a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "adac17b5b2a0c6ebbb29b9bfbb03c91e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "f0a7d1cc2b0fbd863ae88efaff8fca4a",
"favicon.png": "0a9418baefd956cfd30f63320cdfe8ea",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1adb344a40988a87c716f81356493902",
"icons/Icon-192.png": "ca0f1c7bd034b9a2b2440dda86e27ed8",
"icons/Icon-512.png": "2de4603d56cc599d755ad7d0e399cc5c",
"icons/Icon-maskable-192.png": "ca0f1c7bd034b9a2b2440dda86e27ed8",
"icons/Icon-maskable-512.png": "2de4603d56cc599d755ad7d0e399cc5c",
"index.html": "cf1eac44220fc8427acf7f8b6524e693",
"/": "cf1eac44220fc8427acf7f8b6524e693",
"main.dart.js": "439ae886d2244e902f1d9214f6eb942c",
"manifest.json": "a38b1e04baaa8f687cbbfd40ea5711bb",
"version.json": "a9e2691f8647f57e6512dab985425434"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
