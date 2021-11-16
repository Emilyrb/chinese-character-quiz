
$(document).ready(function() {
	// TODO: grab characters list from json file
	//$.getJSON('http://ophanim.de/languageLearning/NPCR.json', function(data) {         
	//    alert(data);
	//});

	characters = [['jiu4 ma1', "aunt (wife of mother's brother)", '舅妈'], ['jiu4 jiu0', "uncle (mother's brother)", '舅舅'], ['nong2 min2', 'farmer; peasant', '农民'], ['dang1', 'to serve as; to be (occupation)', '当'], ['shu1 cai4', 'vegetable', '蔬菜'], ['zheng4 zai4', 'in the process of; in the middle of (used as a key word of a progressive construction)', '正在'], ['zai4', '(used to indicate an action in progress)', '在'], ['wen4 lu4', 'to ask for directions; to ask the way', '问路'], ['bian4 hua4', 'change (noun)', '变化'], ['bu2 dan4', 'not only', '不但'], ['er2 qie3', 'but also; and also', '而且'], ['ke3 bu4', "exactly; right; that's just the way it is", '可不'], ['xiao3 hai2 er2', 'kid; child', '小孩儿'], ['di4 tu2', 'map', '地图'], ['xiang4', 'towards; to', '向'], ['shang4', 'be engaged in (work/study) at a fixed time', '上'], ['da4 xue2', 'university; college', '大学'], ['nian2 ji2', 'grade (in school)', '年级'], ['xin1 ku3', 'hard; toilsome; to work hard', '辛苦'], ['xia4 yu3', 'to rain', '下雨'], ['yu3', 'rain', '雨'], ['zhong4', 'to grow; to plant', '种'], ['wen1 shi4', 'greenhouse', '温室'], ['wen1', 'warm (property)', '温'], ['shou1 ru4', 'income; earnings', '收入'], ['shou1', 'to accept; to receive', '收'], ['ru4', 'to enter (into)', '入'], ['qian2 nian2', 'the year before last; two years ago', '前年'], ['gai4', 'to build', '盖'], ['zuo4', '(measure word for mountains, buildings and other similar immovable objects)', '座'], ['cheng2', 'defensive wall; fortification; (by extension) any city or town', '城'], ['cun1', 'village', '村'], ['di1', 'low', '低'], ['ji4 shu4', 'technology; skill', '技术'], ['guan3 li3', 'to manage; to administer', '管理'], ['zhe0', '(used to indicate a continuous aspect)', '着'], ['song4', 'to take someone somewhere; to see someone off', '送'], ['bei4', 'by (used to indicates the passive voice)', '被'], ['zhuang4', 'to bump against; to knock down', '撞'], ['shang1', 'to hurt; to wound; to injure', '伤'], ['di4', '(used to indicate ordinal numbers)', '第'], ['jian3 cha2', 'to examine', '检查'], ['zhong4', 'serious; heavy', '重'], ['ge1 bo0', 'arm', '胳膊'], ['tui3', 'leg', '腿'], ['xiao4', 'to laugh; to smile', '笑'], ['zhu4 yi4', 'to pay attention to', '注意'], ['ma3 shang4', 'right away; immediately', '马上'], ['yi1 yao4 fei4', 'medical expenses', '医药费'], ['yi3 wei2', 'to mistakenly believe; to be under the impression; to have thought that', '以为'], ['ru2 guo3', 'if', '如果'], ['tang3', 'to lie (down)', '躺'], ['shi4', 'to look at', '视'], ['shu4', '(a measure word for flowers)', '束'], ['fang4', 'to put; to place', '放'], ['zhuo1 zi0', 'table; desk', '桌子'], ['jie2 guo3', 'result; outcome', '结果'], ['guan1', 'to close; to turn off', '关'], ['wan1', 'to bend', '弯'], ['dao3 mei2', 'bad luck', '倒霉'], ['huai4', 'bad; broken', '坏'], ['xiao1 xi0', 'news (e.g. good news everyone)', '消息'], ['xiao3 tou1', 'thief', '小偷'], ['tou1', 'to steal', '偷'], ['pai4 chu1 suo3', 'local police station', '派出所'], ['zhua1', 'to clutch; to catch; to arrest', '抓'], ['diu1', 'lose (as in missing; to misplace sth.)', '丢'], ['cheng2', 'to become', '成'], ['zhong1 guo2 tong1', 'a China expert (lit. China hand)', '中国通'], ['qing2 kuang4', 'situation', '情况'], ['shi2 zai4', 'honest; truly; really', '实在'], ['yue4 lai2 yue4', 'more and more', '越来越'], ['nan2', 'south (cardinal direction)', '南'], ['te4 dian3', 'characteristic; feature', '特点'], ['bo2 wu4 guan3', 'museum', '博物馆'], ['ju3 ban4', 'to conduct; to hold', '举办'], ['zhan3 lan3', 'exhibition; show', '展览'], ['tu2 pian4', 'picture', '图片'], ['dui4', 'towards; to', '对'], ['gan3 xing4 qu4', 'to be interested in', '感兴趣'], ['gan3', 'to feel; to sense', '感'], ['xing4 qu4', 'interest', '兴趣'], ['jie2 ye4', 'to complete a course', '结业'], ['ji4 de0', 'to remember; to recall', '记得'], ['e4', 'hungry', '饿'], ['liao2', 'to chat', '聊'], ['lao3 wai4', 'foreigner', '老外'], ['zhong1 guo2 hua4', 'to Sinify; to Sinicise (to make something Chinese in form or character)', '中国化'], ['hua4', '(suffix denoting "change into ...". Akin to English -ize and -ization.)', '化'], ['cai2', 'just', '才'], ['na4 yang4', 'such; so; like that', '那样'], ['qi1 zi0', 'wife', '妻子'], ['xiao3 huo3 zi0', 'young man', '小伙子'], ['zhang4 fu0', 'husband', '丈夫'], ['sheng1 diao4', 'tone', '声调'], ['nu3 li4', 'hard-working; diligent; industrious', '努力'], ['ren4 zhen1', 'earnest; serious', '认真'], ['re4 qing2', 'enthusiastic; animated', '热情'], ['jin4 bu4', 'progress; advancement; to make progress', '进步'], ['ming2 nian2', 'next year', '明年'], ['pei2', 'to accompany', '陪'], ['bu2 jian4 bu2 san4', "don't leave until we meet", '不见不散'], ['san4', 'to break up; to disperse', '散']];
	//characters = [['jiu4 ma1', "aunt (wife of mother's brother)", '舅妈'], ['jiu4 jiu0', "uncle (mother's brother)", '舅舅'], ['nong2 min2', 'farmer; peasant', '农民'], ['dang1', 'to serve as; to be (occupation)', '当'], ['shu1 cai4', 'vegetable', '蔬菜'], ['zheng4 zai4', 'in the process of; in the middle of (used as a key word of a progressive construction)', '正在'], ['zai4', '(used to indicate an action in progress)', '在'], ['wen4 lu4', 'to ask for directions; to ask the way', '问路']];// Shuffle list and display update text
	
	// Update page at refresh
	shuffle(characters);
	refreshWords(characters);

	// Reveal the character
	$("#reveal").click(function() {
		$("#reveal").text(characters[0][2]);
		$("#reveal").addClass('large-text');
	});

    // if incorrect then queue word next again and shuffle word again into list
    $(".btn-danger").click(function() {
    	current_pair = characters[0];
    	shuffle(characters);
    	characters.unshift(current_pair);
		refreshWords(characters);
	});
    // if correct then remove word and shuffle
    $(".btn-success").click(function() {
    	characters.shift();
		refreshWords(characters);
	});


	// Helper functions
	function refreshWords(array) {
		$("h1").text(characters[0][0]);
		$("h2").text(characters[0][1]);
		$("#reveal").text("Reveal");
		$("#reveal").removeClass('large-text');
	};

	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex--;

	    // And swap it with the current element.
	    [array[currentIndex], array[randomIndex]] = [
	    	array[randomIndex], array[currentIndex]];
	  }

	  return array;
	}

});

