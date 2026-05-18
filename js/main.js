/**
 * 史韵 - 精品历史文学网站
 * 主脚本文件 v2.0
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
        featuredType: "main",
        excerpt: "晋侯、秦伯围郑，以其无礼于晋，且贰于楚也。晋军函陵，秦军氾南。佚之狐言于郑伯曰：'国危矣，若使烛之武见秦君，师必退。'公从之。",
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
        featuredType: "normal",
        excerpt: "臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。",
        content: `臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。

既无伯叔，终鲜兄弟，门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之僮，茕茕独立，形影相吊。而刘夙婴疾病，常在床蓐，臣侍汤药，未曾废离。

逮奉圣朝，沐浴清化。前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。臣以供养无主，辞不赴命。诏书特下，拜臣郎中，寻蒙国恩，除臣洗马。猥以微贱，当侍东宫，非臣陨首所能上报。臣具以表闻，辞不就职。诏书切峻，责臣逋慢；郡县逼迫，催臣上道；州司临门，急于星火。臣欲奉诏奔驰，则以刘病日笃，欲苟顺私情，则告诉不许。臣之进退，实为狼狈。

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
        featuredType: "normal",
        excerpt: "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹，又有清流激湍，映带左右，引以为流觞曲水，列坐其次。",
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
        featuredType: "normal",
        excerpt: "豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。",
        content: `豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。

雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。

时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿。临帝子之长洲，得仙人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。

披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。渔舟唱晚，响穷彭蠡之滨；雁阵惊寒，声断衡阳之浦。

遥襟甫畅，逸兴遄飞。爽籁发而清风生，纤歌凝而白云遏。睢园绿竹，气凌彭泽之樽；邺水朱华，光照临川之笔。四美具，二难并。穷睇眄于中天，极娱游于暇日。天高地迥，觉宇宙之无穷；兴尽悲来，识盈虚之有数。望长安于日下，目吴会于云间。地势极而南溟深，天柱高而北辰远。关山难越，谁悲失路之人？萍水相逢，尽是他乡之客。怀帝阍而不见，奉宣室以何年？

嗟乎！时运不齐，命途多舛。冯唐易老，李广难封。屈贾谊于长沙，非无圣主；窜梁鸿于海曲，岂乏明时？所赖君子见机，达人知命。老当益壮，宁移白首之心？穷且益坚，不坠青云之志。酌贪泉而觉爽，处涸辙以犹欢。北海虽赊，扶摇可接；东隅已逝，桑榆非晚。孟尝高洁，空余报国之情；阮籍猖狂，岂效穷途之哭！

勃，三尺微命，一介书生。无路请缨，等终军之弱冠；有怀投笔，慕宗悫之长风。舍簪笏于百龄，奉晨昏于万里。非谢家之宝树，接孟氏之芳邻。他日趋庭，叨陪鲤对；今兹捧袂，喜托龙门。杨意不逢，抚凌云而自惜；钟期既遇，奏流水以何惭？

呜乎！胜地不常，盛筵难再；兰亭已矣，梓泽丘墟。临别赠言，幸承恩于伟饯；登高作赋，是所望于群公。敢竭鄙怀，恭疏短引；一言均赋，四韵俱成。请洒潘江，各倾陆海云尔。`,
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
        excerpt: "庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废俱兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。予观夫巴陵胜状，在洞庭一湖。",
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
        excerpt: "壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。",
        content: `壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。

于是饮酒乐甚，扣舷而歌之。歌曰："桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。"客有吹洞箫者，倚歌而和之。其声呜呜然，如怨如慕，如泣如诉，余音袅袅，不绝如缕。舞幽壑之潜蛟，泣孤舟之嫠妇。

苏子愀然，正襟危坐，而问客曰："何为其然也？"客曰："月明星稀，乌鹊南飞，此非曹孟德之诗乎？西望夏口，东望武昌，山川相缪，郁乎苍苍，此非孟德之困于周郎者乎？方其破荆州，下江陵，顺流而东也，舳舻千里，旌旗蔽空，酾酒临江，横槊赋诗，固一世之雄也，而今安在哉？况吾与子渔樵于江渚之上，侣鱼虾而友麋鹿，驾一叶之扁舟，举匏樽以相属。寄蜉蝣于天地，渺沧海之一粟。哀吾生之须臾，羡长江之无穷。挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。"

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
        excerpt: "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。",
        content: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。

侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。

将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠以为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。

亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。

臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。

先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。

愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则戮攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。

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
        excerpt: "晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。",
        content: `晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。

林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。

见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。问今是何世，乃不知有汉，无论魏晋。此人一一为具言所闻，皆叹惋。余人各复延至其家，皆出酒食。停数日，辞去。此中人语云："不足为外人道也。"

既出，得其船，便扶向路，处处志之。及郡下，诣太守，说如此。太守即遣人随其往，寻向所志，遂迷，不复得路。

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
        excerpt: "项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。又北向，不能得日，日过午已昏。",
        content: `项脊轩，旧南阁子也。室仅方丈，可容一人居。百年老屋，尘泥渗漉，雨泽下注；每移案，顾视无可置者。又北向，不能得日，日过午已昏。余稍为修葺，使不上漏。前辟四窗，垣墙周庭，以当南日，日影反照，室始洞然。又杂植兰桂竹木于庭，旧时栏楯，亦遂增胜。借书满架，偃仰啸歌，冥然兀坐，万籁有声；而庭阶寂寂，小鸟时来啄食，人至不去。三五之夜，明月半墙，桂影斑驳，风移影动，珊珊可爱。

然余居于此，多可喜，亦多可悲。先是庭中通南北为一。迨诸父异爨，内外多置小门，墙往往而是。东犬西吠，客逾庖而宴，鸡栖于厅。庭中始为篱，已为墙，凡再变矣。家有老妪，尝居于此。妪，先大母婢也，乳二世，先妣抚之甚厚。室西连于中闺，先妣尝一至。妪每谓余曰："某所，而母立于兹。"妪又曰："汝姊在吾怀，呱呱而泣；娘以指叩门扉曰：'儿寒乎？欲食乎？'吾从板外相为应答。"语未毕，余泣，妪亦泣。

余自束发读书轩中，一日，大母过余曰："吾儿，久不见若影，何竟日默默在此，大类女郎也？"比去，以手阖门，自语曰："吾家读书久不效，儿之成，则可待乎！"顷之，持一象笏至，曰："此吾祖太常公宣德间执此以朝，他日汝当用之！"瞻顾遗迹，如在昨日，令人长号不自禁。

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
        excerpt: "崇祯五年十二月，余住西湖。大雪三日，湖中人鸟声俱绝。是日更定矣，余拏一小舟，拥毳衣炉火，独往湖心亭看雪。雾凇沆砀，天与云与山与水，上下一白。",
        content: `崇祯五年十二月，余住西湖。大雪三日，湖中人鸟声俱绝。是日更定矣，余拏一小舟，拥毳衣炉火，独往湖心亭看雪。雾凇沆砀，天与云与山与水，上下一白。湖上影子，惟长堤一痕、湖心亭一点、与余舟一芥、舟中人两三粒而已。

到亭上，有两人铺毡对坐，一童子烧酒炉正沸。见余，大喜曰："湖中焉得更有此人！"拉余同饮。余强饮三大白而别。问其姓氏，是金陵人，客此。及下船，舟子喃喃曰："莫说相公痴，更有痴似相公者！"`,
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
    }
];

// 获取 URL 参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 渲染精选文章
function renderFeatured() {
    const grid = document.getElementById('featuredGrid');
    const featured = articles.filter(a => a.featured);
    
    grid.innerHTML = featured.map((article, index) => `
        <div class="featured-card ${article.featuredType === 'main' ? 'featured-main' : ''} fade-in delay-${index + 1}" 
             onclick="goToArticle(${article.id})" role="article" tabindex="0"
             onkeypress="if(event.key==='Enter') goToArticle(${article.id})">
            <div class="featured-img lazy-img" data-src="${article.cover}" style="background-image: url('${article.cover}')">
                <span class="featured-tag">精选</span>
            </div>
            <div class="featured-content">
                <h3 class="featured-title">${article.title}</h3>
                <p class="featured-excerpt">${article.excerpt}</p>
                <div class="featured-meta">
                    <span>${article.author}</span>
                    <span>${article.dynasty}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // 触发懒加载
    initLazyLoad();
}

// 渲染最新文章
function renderLatest() {
    const list = document.getElementById('articleList');
    const latest = articles.slice(0, 5);
    
    list.innerHTML = latest.map((article, index) => `
        <div class="article-item fade-in delay-${index + 1}" onclick="goToArticle(${article.id})" 
             role="article" tabindex="0" onkeypress="if(event.key==='Enter') goToArticle(${article.id})">
            <div class="article-thumb lazy-img" data-src="${article.cover}" style="background-image: url('${article.cover}')"></div>
            <div class="article-body">
                <div class="article-header">
                    <span class="article-category">${article.category}</span>
                    <span class="article-date">${article.date}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <span class="article-author">${article.author} · ${article.dynasty}</span>
                    <span class="article-read">阅读全文 →</span>
                </div>
            </div>
        </div>
    `).join('');
    
    initLazyLoad();
}

// 跳转文章详情
function goToArticle(id) {
    window.location.href = `article.html?id=${id}`;
}

// 切换搜索框
function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

// 执行搜索
function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        // 实际项目中跳转到搜索结果页
        const results = articles.filter(a => 
            a.title.includes(query) || 
            a.author.includes(query) || 
            a.category.includes(query)
        );
        
        if (results.length > 0) {
            // 跳转到第一篇匹配的文章
            goToArticle(results[0].id);
        } else {
            alert(`未找到"${query}"相关的文章`);
        }
        toggleSearch();
    }
}

// 切换移动端菜单
function toggleMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('mobileNav');
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    btn.setAttribute('aria-expanded', nav.classList.contains('active'));
}

// 回到顶部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 滚动监听 - 显示/隐藏回到顶部按钮
function handleScroll() {
    const backToTop = document.getElementById('backToTop');
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// 滚动动画
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

// 懒加载图片
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

// 页面加载完成后初始化
window.addEventListener('load', () => {
    // 隐藏加载动画
    setTimeout(() => {
        document.getElementById('pageLoader').classList.add('hidden');
    }, 500);
    
    // 初始化滚动动画
    handleScrollAnimation();
});

// 滚动事件监听
let scrollTimeout;
window.addEventListener('scroll', () => {
    handleScroll();
    handleScrollAnimation();
});

// ESC 关闭搜索
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('searchOverlay').classList.remove('active');
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        renderFeatured();
        renderLatest();
    }
});
