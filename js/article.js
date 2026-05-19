/**
 * 史韵 - 文章详情页脚本 v2.0
 */

// 文章数据
const articles = [
    {
        id: 1,
        title: "烛之武退秦师",
        category: "先秦",
        categoryId: "先秦",
        author: "左丘明",
        dynasty: "春秋",
        date: "2026-05-15",
        readTime: "8分钟",
        featured: true,
        excerpt: "晋侯、秦伯围郑，以其无礼于晋，且贰于楚也。",
        content: `晋侯、秦伯围郑，以其无礼于晋，且贰于楚也。晋军函陵，秦军氾南。

佚之狐言于郑伯曰："国危矣，若使烛之武见秦君，师必退。"公从之。

辞曰："臣之壮也，犹不如人；今老矣，无能为也已。"公曰："吾不能早用子，今急而求子，是寡人之过也。然郑亡，子亦有不利焉。"许之。

夜缒而出，见秦伯，曰："秦、晋围郑，郑既知亡矣。若亡郑而有益于君，敢以烦执事。越国以鄙远，君知其难也，焉用亡郑以陪邻？邻之厚，君之薄也。若舍郑以为东道主，行李之往来，共其乏困，君亦无所害。且君尝为晋君赐矣，许君焦、瑕，朝济而夕设版焉，君之所知也。夫晋，何厌之有？既东封郑，又欲肆其西封，若不阙秦，将焉取之？阙秦以利晋，唯君图之。"

秦伯说，与郑人盟。使杞子、逢孙、杨孙戍之，乃还。

子犯请击之。公曰："微夫人之力不及此。因人之力而敝之，不仁；失其所与，不知；以乱易整，不武。吾其还也。"亦去之。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 2,
        title: "陈情表",
        category: "两汉",
        categoryId: "两汉",
        author: "李密",
        dynasty: "西晋",
        date: "2026-05-14",
        readTime: "12分钟",
        featured: true,
        excerpt: "臣以险衅，夙遭闵凶。生孩六月，慈父见背...",
        content: `臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。

既无伯叔，终鲜兄弟，门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之僮，茕茕独立，形影相吊。而刘夙婴疾病，常在床蓐，臣侍汤药，未曾废离。

逮奉圣朝，沐浴清化。前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。臣以供养无主，辞不赴命。诏书特下，拜臣郎中，寻蒙国恩，除臣洗马。猥以微贱，当侍东宫，非臣陨首所能上报。臣具以表闻，辞不就职。

伏惟圣朝以孝治天下，凡在故老，犹蒙矜育，况臣孤苦，特为尤甚。且臣少仕伪朝，历职郎署，本图宦达，不矜名节。今臣亡国贱俘，至微至陋，过蒙拔擢，宠命优渥，岂敢盘桓，有所希冀！但以刘日薄西山，气息奄奄，人命危浅，朝不虑夕。臣无祖母，无以至今日，祖母无臣，无以终余年。母孙二人，更相为命，是以区区不能废远。

臣密今年四十有四，祖母今年九十有六，是臣尽节于陛下之日长，报养刘之日短也。乌鸟私情，愿乞终养。臣之辛苦，非独蜀之人士及二州牧伯所见明知，皇天后土，实所共鉴。愿陛下矜愍愚诚，听臣微志，庶刘侥幸，保卒余年。臣生当陨首，死当结草。臣不胜犬马怖惧之情，谨拜表以闻。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 3,
        title: "兰亭集序",
        category: "魏晋",
        categoryId: "魏晋",
        author: "王羲之",
        dynasty: "东晋",
        date: "2026-05-13",
        readTime: "6分钟",
        featured: true,
        excerpt: "永和九年，岁在癸丑，暮春之初...",
        content: `永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。

是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。

夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至。及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。况修短随化，终期于尽。古人云："死生亦大矣。"岂不痛哉！

每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔。悲夫！

故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 4,
        title: "滕王阁序",
        category: "唐宋",
        categoryId: "唐宋",
        author: "王勃",
        dynasty: "唐",
        date: "2026-05-12",
        readTime: "15分钟",
        featured: true,
        excerpt: "豫章故郡，洪都新府。星分翼轸，地接衡庐...",
        content: `豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。

雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。

时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得仙人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。

披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。

遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。

嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。

呜乎！胜地不常，盛筵难再；兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。请洒潘江，各倾陆海云尔。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 5,
        title: "岳阳楼记",
        category: "唐宋",
        categoryId: "唐宋",
        author: "范仲淹",
        dynasty: "宋",
        date: "2026-05-11",
        readTime: "10分钟",
        featured: false,
        excerpt: "庆历四年春，滕子京谪守巴陵郡...",
        content: `庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废俱兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也。前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？

若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。

至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰"先天下之忧而忧，后天下之乐而乐"乎！噫！微斯人，吾谁与归？`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 6,
        title: "前赤壁赋",
        category: "唐宋",
        categoryId: "唐宋",
        author: "苏轼",
        dynasty: "宋",
        date: "2026-05-10",
        readTime: "9分钟",
        featured: false,
        excerpt: "壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下...",
        content: `壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。

于是饮酒乐甚，扣舷而歌之。歌曰："桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。"客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。

苏子愀然，正襟危坐，而问客曰："何为其然也？"客曰："月明星稀，乌鹊南飞，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？

苏子曰："客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎？且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭，是造物者之无尽藏也，而吾与子之所共适。"

客喜而笑，洗盏更酌。肴核既尽，杯盘狼藉。相与枕藉乎舟中，不知东方之既白。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 7,
        title: "出师表",
        category: "两汉",
        categoryId: "两汉",
        author: "诸葛亮",
        dynasty: "三国·蜀汉",
        date: "2026-05-09",
        readTime: "11分钟",
        featured: false,
        excerpt: "先帝创业未半而中道崩殂，今天下三分...",
        content: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。

臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

今当远离，临表涕零，不知所言。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 8,
        title: "桃花源记",
        category: "魏晋",
        categoryId: "魏晋",
        author: "陶渊明",
        dynasty: "东晋",
        date: "2026-05-08",
        readTime: "5分钟",
        featured: false,
        excerpt: "晋太元中，武陵人捕鱼为业...",
        content: `晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。

林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。

见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。

南阳刘子骥，高尚士也，闻之，欣然规往。未果，寻病终。后遂无问津者。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 9,
        title: "项脊轩志",
        category: "明清",
        categoryId: "明清",
        author: "归有光",
        dynasty: "明",
        date: "2026-05-07",
        readTime: "7分钟",
        featured: false,
        excerpt: "项脊轩，旧南阁子也。室仅方丈，可容一人居...",
        content: `项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。又北向，不能得日，日过午已昏。余稍为修葺，使不上漏。前辟四窗，垣墙周庭，以当南日，日影反照，室始洞然。又杂植兰桂竹木于庭，旧时栏楯，亦遂增胜。借书满架，偃仰啸歌，冥然兀坐，万籁有声；而庭阶寂寂，小鸟时来啄食，人至不去。三五之夜，明月半墙，桂影斑驳，风移影动，珊珊可爱。

然余居于此，多可喜，亦多可悲。先是庭中通南北为一。迨诸父异爨，内外多置小门，墙往往而是。

余自束发读书轩中，一日，大母过余曰："吾儿，久不见若影，何竟日默默在此，大类女郎也？"比去，以手阖门，自语曰："吾家读书久不效，儿之成，则可待乎！"

庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    },
    {
        id: 10,
        title: "湖心亭看雪",
        category: "明清",
        categoryId: "明清",
        author: "张岱",
        dynasty: "明",
        date: "2026-05-06",
        readTime: "4分钟",
        featured: false,
        excerpt: "崇祯五年十二月，余住西湖。大雪三日...",
        content: `崇祯五年十二月，余住西湖。大雪三日，湖中人鸟声俱绝。是日更定矣，余拏一小舟，拥毳衣炉火，独往湖心亭看雪。雾凇沆砀，天与云与山与水，上下一白。湖上影子，惟长堤一痕、湖心亭一点、与余舟一芥、舟中人两三粒而已。

到亭上，有两人铺毡对坐，一童子烧酒炉正沸。见余，大喜曰："湖中焉得更有此人！"拉余同饮。余强饮三大白而别。问其姓氏，是金陵人，客此。及下船，舟子喃喃曰："莫说相公痴，更有痴似相公者！"`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    }
];

// ==================== 文章 PV 浏览量 ====================

// 获取文章 PV（浏览量）
function getArticlePv(articleId) {
    const pvData = JSON.parse(localStorage.getItem('shiyun_article_pv') || '{}');
    return pvData[articleId] || 0;
}

// 增加文章 PV
function incrementArticlePv(articleId) {
    const pvData = JSON.parse(localStorage.getItem('shiyun_article_pv') || '{}');
    pvData[articleId] = (pvData[articleId] || 0) + 1;
    localStorage.setItem('shiyun_article_pv', JSON.stringify(pvData));
    return pvData[articleId];
}

// 获取 URL 参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 渲染文章内容
function renderArticle() {
    const id = parseInt(getUrlParam('id'));
    const article = articles.find(a => a.id === id);

    if (!article) {
        document.getElementById('articleContent').innerHTML = '<p>文章不存在</p>';
        return;
    }

    // 更新页面标题
    document.title = `${article.title} | 史韵`;

    // 更新 SEO 元数据
    updateArticleSEO(article);

    // 检查收藏状态
    updateBookmarkUI(article.id);

    // 增加 PV
    const pv = incrementArticlePv(article.id);

    // 渲染文章内容
    const paragraphs = article.content.split('\n\n').filter(p => p.trim());
    const contentHtml = paragraphs.map(para => `<p>${para}</p>`).join('');

    document.getElementById('articleContent').innerHTML = `
        <div class="article-hero">
            <span class="article-category-tag">${article.category}</span>
            <h1 class="article-hero-title">${article.title}</h1>
            <div class="article-hero-meta">
                <span>${article.author}</span>
                <span>·</span>
                <span>${article.dynasty}</span>
                <span>·</span>
                <span>${article.date}</span>
                <span>·</span>
                <span>${article.readTime}</span>
                <span>·</span>
                <span>👁 ${pv}</span>
            </div>
        </div>
        <div class="article-cover lazy-img" data-src="${article.cover}" style="background-image: url('${article.cover}')"></div>
        <div class="article-body-content">
            ${contentHtml}
        </div>
        <div class="article-end">
            <div class="article-end-decoration">◆ ◇ ◆</div>
        </div>
    `;
    
    // 懒加载
    initLazyLoad();

    // 渲染翻页导航
    renderArticleNav(id);

    // 渲染相关文章（仅显示已发布）
    const related = articles.filter(a => a.categoryId === article.categoryId && a.id !== id && a.status === 'published').slice(0, 3);
    if (related.length > 0) {
        document.getElementById('relatedSection').style.display = 'block';
        document.getElementById('relatedGrid').innerHTML = related.map(a => `
            <div class="featured-card" onclick="window.location.href='article.html?id=${a.id}'" role="article" tabindex="0"
                 onkeypress="if(event.key==='Enter') window.location.href='article.html?id=${a.id}'">
                <div class="featured-img lazy-img" data-src="${a.cover}" style="background-image: url('${a.cover}')"></div>
                <div class="featured-content">
                    <h3 class="featured-title">${a.title}</h3>
                    <div class="featured-meta">
                        <span>${a.author}</span>
                        <span>${a.readTime}</span>
                        <span>👁 ${getArticlePv(a.id)}</span>
                    </div>
                </div>
            </div>
        `).join('');
        initLazyLoad();
    }
}

// 更新书签 UI
function updateBookmarkUI(articleId) {
    const bookmarks = JSON.parse(localStorage.getItem('shiyun_bookmarks') || '[]');
    const btn = document.getElementById('bookmarkBtn');
    const text = document.getElementById('bookmarkText');
    
    if (bookmarks.includes(articleId)) {
        btn.classList.add('active');
        text.textContent = '已收藏';
    } else {
        btn.classList.remove('active');
        text.textContent = '收藏';
    }
}

// 切换书签
function toggleBookmark() {
    const id = parseInt(getUrlParam('id'));
    let bookmarks = JSON.parse(localStorage.getItem('shiyun_bookmarks') || '[]');
    
    if (bookmarks.includes(id)) {
        bookmarks = bookmarks.filter(b => b !== id);
    } else {
        bookmarks.push(id);
    }
    
    localStorage.setItem('shiyun_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI(id);
}

// 阅读进度条
function updateReadingProgress() {
    const article = document.querySelector('.article-body-content');
    const progress = document.getElementById('readingProgress');
    
    if (!article || !progress) return;
    
    const rect = article.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const articleTop = rect.top + window.scrollY;
    const articleHeight = rect.height;
    
    const scrolled = window.scrollY + windowHeight - articleTop;
    const percentage = Math.min(Math.max((scrolled / articleHeight) * 100, 0), 100);
    
    progress.style.width = `${percentage}%`;
}

// 滚动监听
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    updateReadingProgress();
}

// 回到顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 懒加载
function initLazyLoad() {
    const images = document.querySelectorAll('.lazy-img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.style.backgroundImage = `url('${img.dataset.src}')`;
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
}

// 搜索功能
function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const results = articles.filter(a => 
            a.title.includes(query) || 
            a.author.includes(query) || 
            a.category.includes(query)
        );
        if (results.length > 0) {
            window.location.href = `article.html?id=${results[0].id}`;
        } else {
            alert(`未找到"${query}"相关的文章`);
        }
        toggleSearch();
    }
}

// 移动端菜单
function toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('mobileNav');
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', nav.classList.contains('active'));
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderArticle();
    window.addEventListener('scroll', handleScroll);
    renderFooterLinks();
});

// ESC 关闭搜索
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('searchOverlay')?.classList.remove('active');
        document.getElementById('rewardModal')?.classList.remove('active');
    }
});

// 打赏功能
function openRewardModal() {
    const modal = document.getElementById('rewardModal');
    if (modal) {
        modal.classList.add('active');
        initRewardAmounts();
        loadRewardQRCodes();
    }
}

function closeRewardModal() {
    const modal = document.getElementById('rewardModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// 初始化打赏金额按钮
function initRewardAmounts() {
    const amounts = document.querySelectorAll('.reward-amount');
    amounts.forEach(btn => {
        btn.addEventListener('click', () => {
            amounts.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('customAmount').value = btn.dataset.amount;
        });
    });
    
    // 自定义金额
    const customInput = document.getElementById('customAmount');
    customInput.addEventListener('input', () => {
        amounts.forEach(b => b.classList.remove('active'));
    });
}

// 加载收款码
function loadRewardQRCodes() {
    const config = JSON.parse(localStorage.getItem('shiyun_reward_config') || '{}');
    
    const wechatQrcode = document.getElementById('wechatQrcode');
    const alipayQrcode = document.getElementById('alipayQrcode');
    
    if (config.wechat) {
        wechatQrcode.innerHTML = `<img src="${config.wechat}" alt="微信支付">`;
    }
    
    if (config.alipay) {
        alipayQrcode.innerHTML = `<img src="${config.alipay}" alt="支付宝">`;
    }
}

// 点击模态框外部关闭
document.addEventListener('click', (e) => {
    const modal = document.getElementById('rewardModal');
    if (e.target === modal) {
        closeRewardModal();
    }
});

// ==================== 前端广告展示功能 ====================

function initAdsDisplay() {
    renderAdPosition('top', 'ad-slot-top');
    renderAdPosition('sidebar', 'ad-slot-sidebar');
    renderAdPosition('footer', 'ad-slot-footer');
}

function renderAdPosition(position, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const positions = JSON.parse(localStorage.getItem('shiyun_ad_positions') || '{}');
    const adId = positions[position];
    if (!adId) {
        container.style.display = 'none';
        return;
    }

    const adList = JSON.parse(localStorage.getItem('shiyun_ads') || '[]');
    const ad = adList.find(a => String(a.id) === String(adId));
    if (!ad || ad.status !== 'published') {
        container.style.display = 'none';
        return;
    }

    container.style.display = '';
    let adHtml = '';
    const linkStart = ad.link && ad.link !== '#' ? `<a href="${ad.link}" target="_blank" class="ad-link">` : '';
    const linkEnd = ad.link && ad.link !== '#' ? '</a>' : '';

    if (ad.type === 'static' || ad.format === 'gif') {
        adHtml = `${linkStart}<img src="${ad.preview}" alt="${ad.name}" class="ad-media">${linkEnd}`;
    } else if (['mp4', 'webm', 'mov'].includes(ad.format)) {
        adHtml = `${linkStart}<video src="${ad.preview}" class="ad-media" autoplay muted loop playsinline></video>${linkEnd}`;
    } else {
        adHtml = `${linkStart}<div class="ad-placeholder"><span>${ad.name}</span></div>${linkEnd}`;
    }

    container.innerHTML = adHtml;
}

// ==================== 页脚链接渲染 ====================

function renderFooterLinks() {
    const container = document.getElementById('footer-about-links');
    if (!container) return;

    const saved = localStorage.getItem('shiyun_footer_links');
    if (!saved) return;

    const links = JSON.parse(saved);
    const html = links
        .filter(link => link.name)
        .map(link => `<a href="${link.url || '#'}">${link.name}</a>`)
        .join('');

    if (html) {
        container.innerHTML = html;
    }
}

// ==================== 文章翻页导航 ====================

function renderArticleNav(currentId) {
    const container = document.getElementById('articleNav');
    if (!container) return;

    const sorted = [...articles].sort((a, b) => a.id - b.id);
    const currentIndex = sorted.findIndex(a => a.id === currentId);
    if (currentIndex === -1) return;

    const prev = sorted[currentIndex - 1];
    const next = sorted[currentIndex + 1];

    let html = '';
    if (prev) {
        html += `
            <a href="article.html?id=${prev.id}" class="article-nav-prev">
                <span class="article-nav-label">上一篇</span>
                <span class="article-nav-title">${prev.title}</span>
            </a>
        `;
    } else {
        html += `<div class="article-nav-placeholder"></div>`;
    }

    if (next) {
        html += `
            <a href="article.html?id=${next.id}" class="article-nav-next">
                <span class="article-nav-label">下一篇</span>
                <span class="article-nav-title">${next.title}</span>
            </a>
        `;
    } else {
        html += `<div class="article-nav-placeholder"></div>`;
    }

    container.innerHTML = html;
}

// ==================== SEO 元数据动态更新 ====================

function updateArticleSEO(article) {
    const siteUrl = 'https://shiyun.example.com';
    const articleUrl = `${siteUrl}/article.html?id=${article.id}`;

    // 更新 Open Graph
    setMeta('og:title', `${article.title} | 史韵`);
    setMeta('og:description', article.excerpt || article.title);
    setMeta('og:url', articleUrl);
    setMeta('og:image', article.cover || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80');
    setMeta('article:author', article.author);
    setMeta('article:published_time', article.date);

    // 更新 Twitter Card
    setMeta('twitter:title', `${article.title} | 史韵`);
    setMeta('twitter:description', article.excerpt || article.title);
    setMeta('twitter:image', article.cover || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80');

    // 更新 Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = articleUrl;

    // 更新页面 description
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.content = article.excerpt || `${article.title} - ${article.author} ${article.dynasty}`;

    // 注入 JSON-LD Article 结构化数据
    injectArticleJsonLd(article, siteUrl, articleUrl);
}

function setMeta(property, content) {
    const el = document.querySelector(`meta[property="${property}"]`) ||
               document.querySelector(`meta[name="${property}"]`);
    if (el) el.content = content;
}

function injectArticleJsonLd(article, siteUrl, articleUrl) {
    // 移除旧的结构化数据
    const old = document.getElementById('article-json-ld');
    if (old) old.remove();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt || article.title,
        "image": article.cover || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
        "author": {
            "@type": "Person",
            "name": article.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "史韵",
            "url": siteUrl
        },
        "datePublished": article.date,
        "dateModified": article.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        },
        "articleSection": article.category,
        "keywords": `${article.category},${article.author},${article.dynasty},历史文学,文言文`
    };

    const script = document.createElement('script');
    script.id = 'article-json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}

// ==================== 社交分享功能 ====================

function shareTo(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const text = encodeURIComponent(`推荐一篇好文章：${document.title}`);

    const shareUrls = {
        wechat: null, // 微信需要二维码，特殊处理
        weibo: `https://service.weibo.com/share/share.php?url=${url}&title=${text}&pic=`,
        qq: `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&summary=${text}&pics=`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        telegram: `https://t.me/share/url?url=${url}&text=${text}`
    };

    if (platform === 'wechat') {
        showWechatShare();
        return;
    }

    if (platform === 'copy') {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('链接已复制到剪贴板', 'success');
        }).catch(() => {
            // 降级方案
            const input = document.createElement('input');
            input.value = window.location.href;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            showToast('链接已复制到剪贴板', 'success');
        });
        return;
    }

    const shareUrl = shareUrls[platform];
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=500,scrollbars=yes');
    }
}

function showWechatShare() {
    // 微信分享弹窗：生成二维码
    const modal = document.createElement('div');
    modal.className = 'wechat-share-modal';
    modal.innerHTML = `
        <div class="wechat-share-content">
            <div class="wechat-share-header">
                <h3>分享到微信</h3>
                <button class="wechat-share-close" onclick="this.closest('.wechat-share-modal').remove()">&times;</button>
            </div>
            <div class="wechat-share-body">
                <p>打开微信扫一扫，分享到朋友圈</p>
                <div class="wechat-qrcode" id="wechatShareQrcode">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}" alt="微信分享二维码">
                </div>
            </div>
        </div>
    `;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
    document.body.appendChild(modal);
}
