const citys = ['北京', '海淀', '朝阳', '顺义', '怀柔', '通州', '昌平', '延庆', '丰台', '石景山', '大兴', '房山', '密云', '门头沟', '平谷', '东城', '西城', '上海', '闵行', '宝山', '黄浦', '嘉定', '浦东新区', '金山', '青浦', '松江', '奉贤', '崇明', '徐汇', '长宁', '静安', '普陀', '虹口', '杨浦', '天津', '武清', '宝坻', '东丽', '西青', '北辰', '宁河', '和平', '静海', '津南', '滨海新区', '河东', '河西', '蓟州', '南开', '河北', '红桥', '重庆', '永川', '合川', '南川', '江津', '渝北', '北碚', '巴南', '长寿', '黔江', '渝中', '万州', '涪陵', '开县', '城口', '云阳', '巫溪', '奉节', '巫山', '潼南', '垫江', '梁平', '忠县', '石柱', '大足', '荣昌', '铜梁', '璧山', '丰都', '武隆', '彭水', '綦江', '酉阳', '大渡口', '秀山', '江北', '沙坪坝', '九龙坡', '南岸', '开州', '哈尔滨', '双城', '呼兰', '阿城', '宾县', '依兰', '巴彦', '通河', '方正', '延寿', '尚志', '五常', '木兰', '道里', '南岗', '道外', '平房', '松北', '香坊', '齐齐哈尔', '讷河', '龙江', '甘南', '富裕', '依安', '拜泉', '克山', '克东', '泰来', '龙沙', '建华', '铁锋', '昂昂溪', '富拉尔基', '碾子山', '梅里斯', '牡丹江', '海林', '穆棱', '林口', '绥芬河', '宁安', '东宁', '东安', '阳明', '爱民', '西安', '佳木斯', '汤原', '抚远', '桦川', '桦南', '同江', '富锦', '向阳', '前进', '东风', '郊区', '绥化', '肇东', '安达', '海伦', '明水', '望奎', '兰西', '青冈', '庆安', '绥棱', '北林', '黑河', '嫩江', '孙吴', '逊克', '五大连池', '北安', '爱辉', '大兴安岭', '塔河', '漠河', '呼玛', '伊春', '乌伊岭', '五营', '铁力', '嘉荫', '南岔', '友好', '西林', '翠峦', '新青', '美溪', '金山屯', '乌马河', '汤旺河', '带岭', '红星', '上甘岭', '大庆', '林甸', '肇州', '肇源', '杜尔伯特', '萨尔图', '龙凤', '让胡路', '红岗', '大同', '新兴', '七台河', '勃利', '桃山', '茄子河', '鸡西', '虎林', '密山', '鸡东', '鸡冠', '恒山', '滴道', '梨树', '城子河', '麻山', '鹤岗', '绥滨', '萝北', '向阳', '工农', '南山', '兴安', '东山', '兴山', '双鸭山', '集贤', '宝清', '饶河', '友谊', '尖山', '岭东', '四方台', '宝山', '长春', '农安', '德惠', '九台', '榆树', '双阳', '二道', '南关', '宽城', '朝阳', '绿园', '吉林', '舒兰', '永吉', '蛟河', '磐石', '桦甸', '昌邑', '龙潭', '船营', '丰满', '延吉', '敦化', '安图', '汪清', '和龙', '延边', '龙井', '珲春', '图们', '四平', '双辽', '梨树', '公主岭', '伊通', '铁西', '铁东', '通化', '梅河口', '柳河', '辉南', '集安', '通化县', '东昌', '二道江', '白城', '洮南', '大安', '镇赉', '通榆', '洮北', '辽源', '东丰', '东辽', '龙山', '西安', '松原', '乾安', '前郭', '长岭', '扶余', '宁江', '白山', '靖宇', '临江', '长白', '抚松', '江源', '浑江', '沈阳', '浑南', '辽中', '康平', '法库', '新民', '和平', '沈河', '大东', '皇姑', '铁西', '苏家屯', '沈北新区', '于洪', '东陵', '大连', '瓦房店', '金州', '普兰店', '旅顺', '长海', '庄河', '中山', '西岗', '沙河口', '甘井子', '鞍山', '台安', '岫岩', '海城', '铁东', '铁西', '立山', '千山', '抚顺', '新宾', '清原', '新抚', '东洲', '望花', '顺城', '本溪', '本溪县', '平山', '桓仁', '溪湖', '明山', '南芬', '丹东', '凤城', '宽甸', '东港', '元宝', '振兴', '振安', '锦州', '凌海', '古塔', '义县', '黑山', '北镇', '凌河', '太和', '营口', '大石桥', '盖州', '站前', '西市', '鲅鱼圈', '老边', '阜新', '彰武', '海州', '新邱', '太平', '清河门', '细河', '辽阳', '辽阳县', '灯塔', '弓长岭', '白塔', '文圣', '宏伟', '太子河', '铁岭', '开原', '昌图', '西丰', '调兵山', '银州', '清河', '朝阳', '双塔', '凌源', '喀左', '北票', '龙城', '建平县', '盘锦', '大洼', '盘山', '双台子', '兴隆台', '葫芦岛', '建昌', '绥中', '兴城', '连山', '龙港', '南票', '呼和浩特', '土左旗', '托县', '和林', '清水河', '赛罕', '武川', '新城', '回民', '玉泉', '包头', '白云鄂博', '土右旗', '固阳', '达茂旗', '东河', '昆都仑', '青山', '石拐', '九原', '乌海', '海勃湾', '海南', '乌达', '集宁', '卓资', '化德', '商都', '乌兰察布', '兴和', '凉城', '察右前旗', '察右中旗', '察右后旗', '四子王旗', '丰镇', '通辽', '科左中旗', '科左后旗', '开鲁', '库伦', '奈曼', '扎鲁特', '科尔沁', '霍林郭勒', '赤峰', '红山', '阿鲁旗', '巴林左旗', '巴林右旗', '林西', '克什克腾', '翁牛特', '喀喇沁', '宁城', '敖汉', '元宝山', '松山', '鄂尔多斯', '达拉特', '准格尔', '鄂前旗', '鄂托克', '杭锦旗', '乌审旗', '伊金霍洛', '东胜', '临河', '五原', '磴口', '乌前旗', '乌中旗', '乌后旗', '杭锦后旗', '巴彦淖尔', '锡林浩特', '锡林郭勒', '二连浩特', '阿巴嘎', '苏左旗', '苏右旗', '东乌旗', '西乌旗', '太仆寺', '镶黄旗', '正镶白旗', '正蓝旗', '多伦', '海拉尔', '阿荣旗', '莫力达瓦', '鄂伦春旗', '鄂温克旗', '陈旗', '新左旗', '新右旗', '满洲里', '牙克石', '扎兰屯', '呼伦贝尔', '额尔古纳', '根河', '扎赉诺尔', '乌兰浩特', '阿尔山', '科右中旗', '扎赉特', '突泉', '兴安盟', '科右前旗', '阿左旗', '阿右旗', '额济纳', '阿拉善盟', '石家庄', '井陉', '正定', '栾城', '行唐', '灵寿', '高邑', '深泽', '赞皇', '无极', '平山', '元氏', '赵县', '辛集', '藁城', '晋州', '新乐', '鹿泉', '长安', '桥西', '新华', '井陉矿区', '裕华', '保定', '满城', '阜平', '徐水', '唐县', '高阳', '容城', '竞秀', '涞源', '望都', '安新', '易县', '莲池', '曲阳', '蠡县', '顺平', '雄县', '涿州', '定州', '安国', '高碑店', '涞水', '定兴', '清苑', '博野', '南市', '张家口', '宣化', '张北', '康保', '沽源', '尚义', '蔚县', '阳原', '怀安', '万全', '怀来', '涿鹿', '赤城', '崇礼', '桥东', '桥西', '下花园', '双桥', '承德', '承德县', '兴隆', '平泉', '滦平', '隆化', '丰宁', '宽城', '围场', '双滦', '鹰手营子矿', '唐山', '丰南', '丰润', '滦县', '滦南', '乐亭', '迁西', '玉田', '曹妃甸', '遵化', '迁安', '路南', '路北', '古冶', '开平', '廊坊', '固安', '永清', '香河', '大城', '文安', '大厂', '霸州', '三河', '安次', '广阳', '沧州', '青县', '东光', '海兴', '盐山', '肃宁', '南皮', '吴桥', '献县', '孟村', '泊头', '任丘', '黄骅', '河间', '新华', '沧县', '运河', '衡水', '枣强', '武邑', '武强', '饶阳', '安平', '故城', '景县', '阜城', '冀州', '深州', '桃城', '邢台', '临城', '桥东', '内丘', '柏乡', '隆尧', '南和', '宁晋', '巨鹿', '新河', '广宗', '平乡', '威县', '清河', '临西', '南宫', '沙河', '任县', '桥西', '邯郸', '峰峰', '临漳', '成安', '大名', '涉县', '磁县', '肥乡', '永年', '邱县', '鸡泽', '广平', '馆陶', '魏县', '曲周', '武安', '邯山', '丛台', '复兴', '秦皇岛', '青龙', '昌黎', '抚宁', '卢龙', '北戴河', '海港', '山海关', '太原', '清徐', '阳曲', '娄烦', '古交', '尖草坪区', '小店区', '迎泽', '杏花岭', '万柏林', '晋源', '大同', '阳高', '大同县', '天镇', '广灵', '灵丘', '浑源', '左云', '矿区', '南郊', '新荣', '阳泉', '盂县', '平定', '矿区', '郊区', '晋中', '榆次', '榆社', '左权', '和顺', '昔阳', '寿阳', '太谷', '祁县', '平遥', '灵石', '介休', '长治', '黎城', '屯留', '潞城', '襄垣', '平顺', '武乡', '沁县', '长子', '沁源', '壶关', '郊区', '晋城', '沁水', '阳城', '陵川', '高平', '泽州', '临汾', '曲沃', '永和', '隰县', '大宁', '吉县', '襄汾', '蒲县', '汾西', '洪洞', '霍州', '乡宁', '翼城', '侯马', '浮山', '安泽', '古县', '尧都', '运城', '临猗', '稷山', '万荣', '河津', '新绛', '绛县', '闻喜', '垣曲', '永济', '芮城', '夏县', '平陆', '盐湖', '朔州', '平鲁', '山阴', '右玉', '应县', '怀仁', '朔城', '忻州', '定襄', '五台县', '河曲', '偏关', '神池', '宁武', '代县', '繁峙', '保德', '静乐', '岢岚', '五寨', '原平', '忻府', '吕梁', '离石', '临县', '兴县', '岚县', '柳林', '石楼', '方山', '交口', '中阳', '孝义', '汾阳', '文水', '交城', '西安', '长安', '临潼', '蓝田', '周至', '户县', '高陵', '新城', '碑林', '莲湖', '灞桥', '未央', '雁塔', '阎良', '咸阳', '三原', '礼泉', '永寿', '淳化', '泾阳', '武功', '乾县', '彬县', '长武', '旬邑', '兴平', '秦都', '渭城', '延安', '延长', '延川', '子长', '宜川', '富县', '志丹', '安塞', '甘泉', '洛川', '黄陵', '黄龙', '吴起', '宝塔', '榆林', '府谷', '神木', '佳县', '定边', '靖边', '横山', '米脂', '子洲', '绥德', '吴堡', '清涧', '榆阳', '渭南', '华县', '潼关', '大荔', '白水', '富平', '蒲城', '澄城', '合阳', '韩城', '华阴', '临渭', '华州', '商洛', '洛南', '柞水', '商州', '镇安', '丹凤', '商南', '山阳', '安康', '紫阳', '石泉', '汉阴', '旬阳', '岚皋', '平利', '白河', '镇坪', '宁陕', '汉滨', '汉中', '略阳', '勉县', '留坝', '洋县', '城固', '西乡', '佛坪', '宁强', '南郑', '镇巴', '汉台', '宝鸡', '渭滨', '千阳', '麟游', '岐山', '凤翔', '扶风', '眉县', '太白', '凤县', '陇县', '陈仓', '金台', '铜川', '宜君', '耀州', '王益', '印台', '杨凌', '杨陵', '济南', '长清', '商河', '章丘', '平阴', '济阳', '历下', '市中', '槐荫', '天桥', '历城', '青岛', '崂山', '市南', '即墨', '胶州', '黄岛', '莱西', '平度', '市北', '李沧', '城阳', '淄博', '淄川', '博山', '高青', '周村', '沂源', '桓台', '临淄', '张店', '德州', '武城', '临邑', '齐河', '乐陵', '庆云', '平原', '宁津', '夏津', '禹城', '德城', '陵城', '烟台', '莱州', '长岛', '蓬莱', '龙口', '招远', '栖霞', '福山', '牟平', '莱阳', '海阳', '芝罘', '莱山', '潍坊', '青州', '寿光', '临朐', '昌乐', '昌邑', '安丘', '高密', '诸城', '潍城', '寒亭', '坊子', '奎文', '济宁', '嘉祥', '微山', '鱼台', '兖州', '金乡', '汶上', '泗水', '梁山', '曲阜', '邹城', '任城', '泰安', '新泰', '泰山', '肥城', '东平', '宁阳', '岱岳', '临沂', '莒南', '沂南', '兰陵', '临沭', '郯城', '蒙阴', '平邑', '费县', '沂水', '兰山', '罗庄', '河东', '菏泽', '鄄城', '郓城', '东明', '定陶', '巨野', '曹县', '成武', '单县', '牡丹', '滨州', '博兴', '无棣', '阳信', '惠民', '沾化', '邹平', '滨城', '东营', '河口', '垦利', '利津', '广饶', '威海', '文登', '荣成', '乳山', '环翠', '枣庄', '薛城', '峄城', '台儿庄', '滕州', '市中', '山亭', '日照', '五莲', '莒县', '东港', '岚山', '莱芜', '莱城', '钢城', '聊城', '冠县', '阳谷', '高唐', '茌平', '东阿', '临清', '东昌府', '莘县', '乌鲁木齐', '天山', '沙依巴克', '达坂城', '新市', '水磨沟', '头屯河', '米东', '乌鲁木齐县', '克拉玛依', '乌尔禾', '白碱滩', '独山子', '石河子', '昌吉', '呼图壁', '阜康', '吉木萨尔', '奇台', '玛纳斯', '木垒', '吐鲁番', '托克逊', '高昌', '鄯善', '库尔勒', '轮台', '尉犁', '若羌', '且末', '和静', '焉耆', '和硕', '巴音郭楞', '博湖', '阿拉尔', '阿克苏', '乌什', '温宿', '拜城', '新和', '沙雅', '库车', '柯坪', '阿瓦提', '喀什', '英吉沙', '塔什库尔干', '麦盖提', '莎车', '叶城', '泽普', '巴楚', '岳普湖', '伽师', '疏附', '疏勒', '伊宁', '察布查尔', '尼勒克', '伊宁县', '巩留', '新源', '昭苏', '特克斯', '霍城', '霍尔果斯', '奎屯', '伊犁', '塔城', '裕民', '额敏', '和布克赛尔', '托里', '乌苏', '沙湾', '哈密', '伊州', '巴里坤', '伊吾', '和田', '皮山', '策勒', '墨玉', '洛浦', '民丰', '于田', '阿勒泰', '哈巴河', '吉木乃', '布尔津', '福海', '富蕴', '青河', '北屯', '双河', '可克达拉', '阿图什', '乌恰', '阿克陶', '阿合奇', '克州', '博乐', '温泉', '精河', '博尔塔拉', '阿拉山口', '图木舒克', '五家渠', '铁门关', '拉萨', '当雄', '尼木', '林周', '堆龙德庆', '曲水', '达孜', '墨竹工卡', '城关', '日喀则', '拉孜', '南木林', '聂拉木', '定日', '江孜', '仲巴', '萨嘎', '吉隆', '昂仁', '定结', '萨迦', '谢通门', '桑珠孜', '岗巴', '白朗', '亚东', '康马', '仁布', '山南', '贡嘎', '扎囊', '加查', '浪卡子', '错那', '隆子', '乃东', '桑日', '洛扎', '措美', '琼结', '曲松', '林芝', '波密', '米林', '察隅', '工布江达', '朗县', '墨脱', '巴宜', '昌都', '丁青', '边坝', '洛隆', '左贡', '芒康', '类乌齐', '八宿', '江达', '察雅', '贡觉', '卡若', '那曲', '尼玛', '嘉黎', '班戈', '安多', '索县', '聂荣', '巴青', '比如', '双湖', '申扎', '阿里', '改则', '普兰', '札达', '噶尔', '日土', '革吉', '措勤', '西宁', '大通', '湟源', '湟中', '城东', '城中', '城西', '城北', '平安', '乐都', '民和', '互助', '化隆', '循化', '海东', '同仁', '尖扎', '泽库', '河南', '黄南', '共和', '海南', '贵德', '兴海', '贵南', '同德', '玛沁', '班玛', '甘德', '达日', '久治', '玛多', '果洛', '玉树', '称多', '治多', '杂多', '囊谦', '曲麻莱', '德令哈', '海西', '天峻', '乌兰', '茫崖', '大柴旦', '格尔木', '都兰', '冷湖', '海晏', '门源', '祁连', '海北', '刚察', '兰州', '皋兰', '永登', '榆中', '城关', '七里河', '西固', '安宁', '红古', '定西', '通渭', '陇西', '渭源', '临洮', '漳县', '岷县', '安定', '平凉', '泾川', '灵台', '崇信', '华亭', '庄浪', '静宁', '崆峒', '庆阳', '西峰', '环县', '华池', '合水', '正宁', '宁县', '镇原', '庆城', '武威', '民勤', '古浪', '凉州', '天祝', '金昌', '永昌', '金川', '张掖', '肃南', '民乐', '临泽', '高台', '山丹', '甘州', '酒泉', '肃州', '金塔', '阿克塞', '瓜州', '肃北', '玉门', '敦煌', '天水', '秦州', '清水', '秦安', '甘谷', '武山', '张家川', '麦积', '武都', '成县', '文县', '宕昌', '康县', '西和', '礼县', '徽县', '两当', '陇南', '临夏', '康乐', '永靖', '广河', '和政', '东乡', '积石山', '合作', '临潭', '卓尼', '舟曲', '迭部', '玛曲', '碌曲', '夏河', '甘南', '白银', '靖远', '会宁', '平川', '景泰', '嘉峪关', '银川', '永宁', '灵武', '贺兰', '兴庆', '西夏', '金凤', '石嘴山', '惠农', '平罗', '大武口', '吴忠', '同心', '盐池', '利通', '红寺堡', '青铜峡', '固原', '西吉', '隆德', '泾源', '原州', '彭阳', '中卫', '中宁', '沙坡头', '海原', '郑州', '巩义', '荥阳', '登封', '新密', '新郑', '中牟', '上街', '中原', '二七', '管城', '金水', '惠济', '安阳', '汤阴', '滑县', '内黄', '林州', '文峰', '北关', '殷都', '龙安', '新乡', '获嘉', '原阳', '辉县', '卫辉', '延津', '封丘', '长垣', '红旗', '卫滨', '凤泉', '牧野', '许昌', '鄢陵', '襄城', '长葛', '禹州', '魏都', '平顶山', '郏县', '宝丰', '汝州', '叶县', '舞钢', '鲁山', '石龙', '新华', '卫东', '湛河', '信阳', '息县', '罗山', '光山', '新县', '淮滨', '潢川', '固始', '商城', '浉河', '平桥', '南阳', '南召', '方城', '社旗', '西峡', '内乡', '镇平', '淅川', '新野', '唐河', '邓州', '桐柏', '宛城', '卧龙', '开封', '杞县', '尉氏', '通许', '兰考', '龙亭', '顺河', '鼓楼', '禹王台', '祥符', '洛阳', '新安', '孟津', '宜阳', '洛宁', '伊川', '嵩县', '偃师', '栾川', '汝阳', '吉利', '老城', '西工', '瀍河', '涧西', '洛龙', '商丘', '梁园', '睢县', '民权', '虞城', '柘城', '宁陵', '夏邑', '永城', '睢阳', '焦作', '修武', '武陟', '沁阳', '解放', '博爱', '温县', '孟州', '中站', '马村', '山阳', '鹤壁', '浚县', '淇县', '鹤山', '山城', '淇滨', '濮阳', '台前', '南乐', '清丰', '范县', '华龙', '周口', '扶沟', '太康', '淮阳', '西华', '商水', '项城', '郸城', '鹿邑', '沈丘', '川汇', '漯河', '临颍', '舞阳', '源汇', '郾城', '召陵', '驻马店', '西平', '遂平', '上蔡', '汝南', '泌阳', '平舆', '新蔡', '确山', '正阳', '驿城', '三门峡', '灵宝', '渑池', '卢氏', '义马', '陕县', '湖滨', '陕州', '济源', '南京', '溧水', '高淳', '江宁', '六合', '浦口', '玄武', '秦淮', '建邺', '鼓楼', '栖霞', '雨花台', '无锡', '江阴', '宜兴', '锡山', '惠山', '滨湖', '梁溪', '新吴', '镇江', '丹阳', '扬中', '句容', '丹徒', '京口', '润州', '苏州', '常熟', '张家港', '昆山', '吴中', '虎丘', '吴江', '太仓', '相城', '姑苏', '南通', '海安', '如皋', '如东', '崇川', '港闸', '启东', '海门', '通州', '扬州', '宝应', '仪征', '高邮', '江都', '邗江', '广陵', '盐城', '响水', '滨海', '阜宁', '射阳', '建湖', '东台', '大丰', '盐都', '亭湖', '徐州', '铜山', '丰县', '沛县', '邳州', '睢宁', '新沂', '鼓楼', '云龙', '贾汪', '泉山', '淮安', '金湖', '盱眙', '洪泽', '涟水', '淮阴区', '清河', '淮安区', '清浦', '连云港', '东海', '赣榆', '灌云', '灌南', '海州', '常州', '溧阳', '金坛', '武进', '天宁', '钟楼', '新北', '泰州', '兴化', '泰兴', '姜堰', '靖江', '海陵', '高港', '宿迁', '沭阳', '泗阳', '泗洪', '宿豫', '宿城', '武汉', '蔡甸', '黄陂', '新洲', '江夏', '东西湖', '江岸', '江汉', '硚口', '汉阳', '武昌', '青山', '洪山', '汉南', '襄阳', '襄州', '保康', '南漳', '宜城', '老河口', '谷城', '枣阳', '襄城', '樊城', '鄂州', '梁子湖', '华容', '鄂城', '孝感', '安陆', '云梦', '大悟', '应城', '汉川', '孝昌', '孝南', '黄冈', '红安', '麻城', '罗田', '英山', '浠水', '蕲春', '黄梅', '武穴', '团风', '黄州', '黄石', '大冶', '阳新', '铁山', '下陆', '西塞山', '黄石港', '咸宁', '赤壁', '嘉鱼', '崇阳', '通城', '通山', '咸安', '荆州', '江陵', '公安', '石首', '监利', '洪湖', '松滋', '沙市', '宜昌', '远安', '秭归', '兴山', '西陵', '五峰', '当阳', '长阳', '宜都', '枝江', '夷陵', '伍家岗', '点军', '猇亭', '恩施', '利川', '建始', '咸丰', '宣恩', '鹤峰', '来凤', '巴东', '十堰', '竹溪', '郧西', '郧阳', '竹山', '房县', '丹江口', '茅箭', '张湾', '神农架', '随州', '广水', '曾都', '随县', '荆门', '钟祥', '京山', '掇刀', '沙洋', '东宝', '天门', '仙桃', '潜江', '杭州', '萧山', '桐庐', '淳安', '建德', '余杭', '临安', '富阳', '上城', '下城', '江干', '拱墅', '西湖', '滨江', '湖州', '长兴', '安吉', '德清', '吴兴', '南浔', '嘉兴', '嘉善', '海宁', '桐乡', '平湖', '海盐', '南湖', '秀洲', '宁波', '海曙', '慈溪', '余姚', '奉化', '象山', '江东', '宁海', '江北', '北仑', '鄞州', '镇海', '越城', '诸暨', '上虞', '新昌', '嵊州', '柯桥', '绍兴', '台州', '玉环', '三门', '天台', '仙居', '温岭', '临海', '椒江', '黄岩', '路桥', '温州', '泰顺', '文成', '平阳', '瑞安', '洞头', '乐清', '永嘉', '苍南', '鹿城', '龙湾', '瓯海', '丽水', '遂昌', '龙泉', '缙云', '青田', '云和', '庆元', '松阳', '景宁', '莲都', '金华', '浦江', '兰溪', '义乌', '东阳', '武义', '永康', '磐安', '婺城', '金东', '衢州', '常山', '开化', '龙游', '江山', '衢江', '柯城', '舟山', '嵊泗', '岱山', '普陀', '定海', '合肥', '长丰', '肥东', '肥西', '巢湖', '庐江', '瑶海', '庐阳', '蜀山', '包河', '蚌埠', '怀远', '固镇', '五河', '龙子湖', '蚌山', '禹会', '淮上', '芜湖', '繁昌', '芜湖县', '南陵', '无为', '镜湖', '弋江', '鸠江', '三山', '淮南', '凤台', '潘集', '大通', '田家庵', '谢家集', '八公山', '寿县', '马鞍山', '当涂', '含山', '和县', '花山', '雨山', '博望', '安庆', '太湖', '潜山', '怀宁', '宿松', '望江', '岳西', '桐城', '迎江', '大观', '宜秀', '宿州', '砀山', '灵璧', '泗县', '萧县', '埇桥', '阜阳', '阜南', '颍上', '临泉', '界首', '太和', '颍州', '颍东', '颍泉', '亳州', '涡阳', '利辛', '蒙城', '谯城', '黄山', '黄山区', '屯溪', '祁门', '黟县', '歙县', '休宁', '徽州', '滁州', '凤阳', '明光', '定远', '全椒', '来安', '天长', '琅琊', '南谯', '淮北', '濉溪', '杜集', '相山', '烈山', '铜陵', '铜官', '义安', '郊区', '枞阳', '宣城', '泾县', '旌德', '宁国', '绩溪', '广德', '郎溪', '宣州', '六安', '霍邱', '金安', '金寨', '霍山', '舒城', '裕安', '叶集', '池州', '东至', '青阳', '九华山', '石台', '贵池', '福州', '闽清', '闽侯', '罗源', '连江', '鼓楼', '永泰', '平潭', '台江', '长乐', '福清', '仓山', '马尾', '晋安', '厦门', '同安', '思明', '海沧', '湖里', '集美', '翔安', '宁德', '古田', '霞浦', '寿宁', '周宁', '福安', '柘荣', '福鼎', '屏南', '蕉城', '莆田', '仙游', '涵江', '秀屿', '荔城', '城厢', '泉州', '安溪', '金门', '永春', '德化', '南安', '惠安', '晋江', '石狮', '鲤城', '丰泽', '洛江', '泉港', '漳州', '长泰', '南靖', '平和', '龙海', '漳浦', '诏安', '东山', '云霄', '华安', '芗城', '龙文', '龙岩', '长汀', '连城', '武平', '上杭', '永定', '漳平', '新罗', '三明', '宁化', '清流', '泰宁', '将乐', '建宁', '明溪', '沙县', '尤溪', '永安', '大田', '梅列', '三元', '南平', '顺昌', '光泽', '邵武', '武夷山', '浦城', '建阳', '松溪', '政和', '建瓯', '延平', '钓鱼岛', '南昌', '新建', '南昌县', '安义', '进贤', '东湖', '西湖', '青云谱', '湾里', '青山湖', '九江', '瑞昌', '庐山', '武宁', '德安', '永修', '湖口', '彭泽', '星子', '都昌', '浔阳', '修水', '共青城', '上饶', '鄱阳', '婺源', '信州', '余干', '万年', '德兴', '上饶县', '弋阳', '横峰', '铅山', '玉山', '广丰', '抚州', '广昌', '乐安', '崇仁', '金溪', '资溪', '宜黄', '南城', '南丰', '黎川', '东乡', '临川', '宜春', '铜鼓', '宜丰', '万载', '上高', '靖安', '奉新', '高安', '樟树', '丰城', '袁州', '吉安', '吉安县', '吉水', '新干', '峡江', '永丰', '永新', '井冈山', '万安', '遂川', '泰和', '安福', '吉州', '青原', '赣州', '崇义', '上犹', '南康', '大余', '信丰', '宁都', '石城', '瑞金', '于都', '会昌', '安远', '全南', '龙南', '定南', '寻乌', '兴国', '赣县', '章贡', '景德镇', '乐平', '浮梁', '昌江', '珠山', '萍乡', '莲花', '上栗', '安源', '芦溪', '湘东', '新余', '分宜', '渝水', '鹰潭', '余江', '贵溪', '月湖', '长沙', '宁乡', '浏阳', '湘江新区', '望城', '长沙县', '芙蓉', '天心', '岳麓', '开福', '雨花', '湘潭', '韶山', '湘乡', '雨湖', '岳塘', '株洲', '攸县', '醴陵', '荷塘', '茶陵', '炎陵', '芦淞', '石峰', '天元', '衡阳', '衡山', '衡东', '祁东', '衡阳县', '常宁', '衡南', '耒阳', '南岳', '珠晖', '雁峰', '石鼓', '蒸湘', '郴州', '桂阳', '嘉禾', '宜章', '临武', '北湖', '资兴', '汝城', '安仁', '永兴', '桂东', '苏仙', '常德', '安乡', '桃源', '汉寿', '澧县', '临澧', '石门', '津市', '武陵', '鼎城', '益阳', '赫山区', '南县', '桃江', '安化', '沅江', '资阳', '娄底', '双峰', '冷水江', '娄星', '新化', '涟源', '邵阳', '隆回', '洞口', '新邵', '邵东', '绥宁', '新宁', '武冈', '城步', '邵阳县', '双清', '大祥', '北塔', '岳阳', '华容', '湘阴', '汨罗', '平江', '临湘', '岳阳楼区', '云溪', '君山', '张家界', '桑植', '慈利', '武陵源', '永定', '怀化', '鹤城', '沅陵', '辰溪', '靖州', '会同', '通道', '麻阳', '新晃', '芷江', '溆浦', '中方', '洪江', '永州', '祁阳', '东安', '双牌', '道县', '宁远', '江永', '蓝山', '新田', '江华', '冷水滩', '零陵', '吉首', '保靖', '永顺', '古丈', '凤凰', '泸溪', '龙山', '花垣', '湘西', '贵阳', '白云', '花溪', '乌当', '息烽', '开阳', '修文', '清镇', '云岩', '南明', '观山湖', '遵义', '遵义县', '仁怀', '绥阳', '湄潭', '凤冈', '桐梓', '赤水', '习水', '道真', '正安', '务川', '余庆', '汇川', '红花岗', '播州', '安顺', '普定', '镇宁', '平坝', '紫云', '关岭', '西秀', '都匀', '贵定', '瓮安', '长顺', '福泉', '惠水', '龙里', '罗甸', '平塘', '独山', '三都', '荔波', '黔南', '凯里', '岑巩', '施秉', '镇远', '黄平', '黔东南', '麻江', '丹寨', '三穗', '台江', '剑河', '雷山', '黎平', '天柱', '锦屏', '榕江', '从江', '铜仁', '江口', '玉屏', '万山', '思南', '碧江', '印江', '石阡', '沿河', '德江', '松桃', '毕节', '赫章', '金沙', '威宁', '大方', '纳雍', '织金', '黔西', '七星关', '水城', '六枝', '六盘水', '盘县', '钟山', '兴义', '晴隆', '兴仁', '贞丰', '望谟', '黔西南', '安龙', '册亨', '普安', '成都', '龙泉驿', '新都', '温江', '金堂', '双流', '郫县', '大邑', '蒲江', '新津', '都江堰', '彭州', '邛崃', '崇州', '青白江', '锦江', '青羊', '金牛', '武侯', '成华', '简阳', '攀枝花', '仁和', '米易', '盐边', '东区', '西区', '自贡', '富顺', '荣县', '自流井', '贡井', '大安', '沿滩', '绵阳', '三台', '盐亭', '安县', '梓潼', '北川', '平武', '江油', '涪城', '游仙', '安州', '南充', '南部', '营山', '蓬安', '仪陇', '西充', '阆中', '顺庆', '高坪', '嘉陵', '达州', '宣汉', '开江', '大竹', '渠县', '万源', '通川', '达川', '遂宁', '蓬溪', '射洪', '船山', '安居', '大英', '广安', '岳池', '武胜', '邻水', '华蓥', '前锋', '巴中', '通江', '南江', '平昌', '巴州', '恩阳', '泸州', '江阳', '泸县', '合江', '叙永', '古蔺', '纳溪', '龙马潭', '宜宾', '翠屏', '宜宾县', '南溪', '江安', '长宁', '高县', '珙县', '筠连', '兴文', '屏山', '内江', '东兴', '威远', '资中', '隆昌', '市中', '资阳', '安岳', '乐至', '雁江', '乐山', '犍为', '井研', '夹江', '沐川', '峨边', '马边', '峨眉山', '市中', '沙湾', '五通桥', '金口河', '眉山', '仁寿', '彭山', '洪雅', '丹棱', '青神', '东坡', '凉山', '木里', '盐源', '德昌', '会理', '会东', '宁南', '普格', '西昌', '金阳', '昭觉', '喜德', '冕宁', '越西', '甘洛', '雷波', '美姑', '布拖', '雅安', '名山', '荥经', '汉源', '石棉', '天全', '芦山', '宝兴', '雨城', '甘孜', '康定', '泸定', '丹巴', '九龙', '雅江', '道孚', '炉霍', '新龙', '德格', '白玉', '石渠', '色达', '理塘', '巴塘', '乡城', '稻城', '得荣', '阿坝', '汶川', '理县', '茂县', '松潘', '九寨沟', '金川', '小金', '黑水', '马尔康', '壤塘', '若尔盖', '红原', '德阳', '中江', '广汉', '什邡', '绵竹', '罗江', '旌阳', '广元', '旺苍', '青川', '剑阁', '苍溪', '利州', '昭化', '朝天', '广州', '番禺', '从化', '增城', '花都', '荔湾', '越秀', '海珠', '天河', '白云', '黄埔', '南沙', '韶关', '乳源', '始兴', '翁源', '乐昌', '仁化', '南雄', '新丰', '曲江', '浈江', '武江', '惠州', '博罗', '惠阳', '惠东', '龙门', '惠城', '梅州', '兴宁', '蕉岭', '大埔', '梅江', '丰顺', '平远', '五华', '梅县', '汕头', '潮阳', '澄海', '南澳', '龙湖', '金平', '濠江', '潮南', '深圳', '罗湖', '福田', '南山', '宝安', '龙岗', '盐田', '珠海', '斗门', '金湾', '香洲', '佛山', '顺德', '三水', '南海', '高明', '禅城', '肇庆', '广宁', '四会', '端州', '德庆', '怀集', '封开', '高要', '鼎湖', '湛江', '吴川', '雷州', '徐闻', '廉江', '赤坎', '遂溪', '坡头', '霞山', '麻章', '江门', '开平', '新会', '恩平', '台山', '蓬江', '鹤山', '江海', '河源', '紫金', '连平', '和平', '龙川', '东源', '源城', '清远', '连南', '连州', '连山', '阳山', '佛冈', '英德', '清新', '清城', '云浮', '罗定', '新兴', '郁南', '云城', '云安', '潮州', '饶平', '潮安', '湘桥', '东莞', '中山', '阳江', '阳春', '阳东', '阳西', '江城', '揭阳', '揭西', '普宁', '惠来', '揭东', '榕城', '茂名', '高州', '化州', '电白', '信宜', '茂南', '汕尾', '海丰', '陆丰', '陆河', '昆明', '五华', '东川', '寻甸', '晋宁', '宜良', '石林', '呈贡', '富民', '嵩明', '禄劝', '安宁', '盘龙', '官渡', '西山', '大理', '云龙', '漾濞', '永平', '宾川', '弥渡', '祥云', '巍山', '剑川', '洱源', '鹤庆', '南涧', '红河', '石屏', '建水', '弥勒', '元阳', '绿春', '开远', '个旧', '蒙自', '屏边', '泸西', '金平', '河口', '曲靖', '沾益', '陆良', '富源', '马龙', '师宗', '罗平', '会泽', '宣威', '麒麟', '保山', '隆阳', '龙陵', '施甸', '昌宁', '腾冲', '文山', '西畴', '马关', '麻栗坡', '砚山', '丘北', '广南', '富宁', '玉溪', '澄江', '江川', '通海', '华宁', '新平', '易门', '峨山', '元江', '红塔', '楚雄', '大姚', '元谋', '姚安', '牟定', '南华', '武定', '禄丰', '双柏', '永仁', '普洱', '景谷', '景东', '澜沧', '思茅', '墨江', '江城', '孟连', '西盟', '镇沅', '宁洱', '昭通', '鲁甸', '彝良', '镇雄', '威信', '巧家', '绥江', '永善', '盐津', '大关', '水富', '昭阳', '临沧', '沧源', '耿马', '双江', '凤庆', '永德', '云县', '镇康', '临翔', '怒江', '福贡', '兰坪', '泸水', '贡山', '香格里拉', '德钦', '维西', '迪庆', '丽江', '永胜', '华坪', '宁蒗', '古城', '玉龙', '德宏', '陇川', '盈江', '瑞丽', '梁河', '芒市', '景洪', '西双版纳', '勐海', '勐腊', '南宁', '兴宁', '邕宁', '横县', '隆安', '马山', '上林', '武鸣', '宾阳', '青秀', '江南', '西乡塘', '良庆', '崇左', '天等', '龙州', '凭祥', '大新', '扶绥', '宁明', '江州', '柳州', '柳城', '城中', '鹿寨', '柳江', '融安', '融水', '三江', '鱼峰', '柳南', '柳北', '来宾', '忻城', '金秀', '象州', '武宣', '合山', '兴宾', '桂林', '秀峰', '龙胜', '永福', '临桂', '兴安', '灵川', '全州', '灌阳', '阳朔', '恭城', '平乐', '荔浦', '资源', '叠彩', '象山', '七星', '雁山', '梧州', '藤县', '万秀', '苍梧', '蒙山', '岑溪', '长洲', '龙圩', '贺州', '昭平', '富川', '钟山', '八步', '平桂', '贵港', '桂平', '平南', '港北', '港南', '覃塘', '玉林', '博白', '北流', '容县', '陆川', '兴业', '玉州', '福绵', '百色', '那坡', '田阳', '德保', '靖西', '田东', '平果', '隆林', '西林', '乐业', '凌云', '田林', '右江', '钦州', '浦北', '灵山', '钦南', '钦北', '河池', '天峨', '东兰', '巴马', '环江', '罗城', '宜州', '凤山', '南丹', '都安', '大化', '金城江', '北海', '合浦', '海城', '银海', '铁山港', '防城港', '上思', '东兴', '港口', '防城', '海口', '秀英', '龙华', '琼山', '美兰', '三亚', '东方', '临高', '澄迈', '儋州', '昌江', '白沙', '琼中', '定安', '屯昌', '琼海', '文昌', '海棠', '保亭', '万宁', '陵水', '吉阳', '天涯', '乐东', '五指山', '崖州', '三沙', '西沙', '中沙', '南沙', '香港', '九龙', '新界', '澳门', '氹仔岛', '路环岛', '台北', '桃园', '新竹', '宜兰', '高雄', '嘉义', '台南', '台东', '屏东', '台中', '苗栗', '彰化', '南投', '花莲', '云林']

/**
 * 获取含有关键字的城市名称
 *
 * @export function
 * @param {string} string
 * @returns array
 */
export default function (string) {
  return citys.filter((city) => {
    if (city.indexOf(string) > -1) {
      console.log(city)
      console.log(string)
      return true
    }
    return false
  })
}