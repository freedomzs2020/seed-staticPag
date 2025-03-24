// 将 showNewsDetail 函数定义移到最外层
window.showNewsDetail = function (newsId) {
  const modal = document.getElementById("newsModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalSource = document.getElementById("modalSource");
  const modalContent = document.getElementById("modalContent");

  if (!modal || !modalTitle || !modalDate || !modalSource || !modalContent)
    return;

  if (newsDatabase[newsId]) {
    const news = newsDatabase[newsId];
    modalTitle.textContent = news.title;
    modalDate.textContent = "发布时间：" + news.date;
    modalSource.textContent = "来源：" + news.source;
    modalContent.innerHTML = news.content;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }
};

// 将 newsDatabase 移到全局作用域
window.newsDatabase = {
  1: {
    title: "种子管理条例实施细则正式发布",
    date: "2023-10-15",
    source: "农业农村部",
    content: `
      <p>农业农村部近日正式发布《种子管理条例实施细则》，自2023年12月1日起施行。该细则是对《种子管理条例》的进一步细化和补充，旨在规范种子市场，保障种子质量和农民权益。</p>
      <p>细则明确了种子生产、经营许可的具体条件和程序，规定了种子质量检验、包装和标签管理的具体要求，以及种子储备和监督管理的相关内容。</p>
      <p>同时，细则还加强了对转基因种子的管理，明确要求销售转基因种子应当有明确标识，并向购买方提供相关安全用种的技术指导意见。</p>
      <p>专家表示，该细则的出台有利于构建现代种业体系，促进种业高质量发展，为保障国家粮食安全提供有力支撑。</p>
      <h3>细则主要内容</h3>
      <p>根据《种子管理条例实施细则》，种子生产经营许可证的申请条件更加严格，申请人需具备相应的种子生产加工设施、检验场所和仪器设备、专业技术人员等。细则还对种子标签的内容和格式提出明确要求，种子标签应当标注品种名称、种子类别、净重、生产经营者名称、质量指标、生产日期和有效期等内容。</p>
      <p>在种子质量管理方面，细则规定了主要农作物种子质量纠纷田间鉴定程序，以及农作物种子质量检验机构资质条件和管理办法。对于已取得审定证书的品种，品种审定委员会应当根据同一生态区试验数据，提供特征特性、栽培技术要点和适宜种植区域等信息，并向社会公布。</p>
      <p>在种子市场监管方面，细则明确了县级以上人民政府农业农村主管部门的监督检查职责，包括对种子生产经营许可证的核发和管理，对种子质量的监督管理，对品种审定、登记、引种备案的监督管理等。农业农村主管部门应当加强种子市场监测，建立种子质量监督抽查制度，定期或不定期对市场上销售的种子进行抽查检验。</p>
      <h3>行业影响</h3>
      <p>农业专家认为，《种子管理条例实施细则》的出台，将对种业发展产生深远影响。一方面，严格的市场准入条件和监管措施，有利于淘汰一批不符合条件的小型种子企业，推动行业集中度提高；另一方面，明确的质量标准和管理规范，有利于促进种子企业提升产品质量和服务水平，为农民提供更好的种子产品。</p>
      <p>中国农业大学教授王明表示："实施细则的出台是我国种业法规体系建设的重要一步，对规范种子市场秩序、保护农民利益、促进种业高质量发展具有重要意义。种子是农业生产的起点，只有保障种子质量，才能保障农产品质量和国家粮食安全。"</p>
      <p>种业企业代表也表示，新细则虽然提高了行业门槛，增加了企业合规成本，但长期来看有利于行业良性发展，企业将积极调整经营策略，加强质量管理，提升创新能力，以适应新形势下的监管要求。</p>
      <h3>农民受益</h3>
      <p>《种子管理条例实施细则》的实施，最终受益者是广大农民。通过规范种子市场，提高种子质量，可以有效降低农民种植风险，提高农业生产效益。</p>
      <p>河南省农民张大海说："以前买种子经常担心买到假种子、劣质种子，现在国家对种子管理这么严格，我们种地就更有保障了。希望以后种子质量越来越好，价格越来越合理。"</p>
      <p>农业农村部相关负责人表示，下一步将加强《种子管理条例实施细则》的宣传贯彻，指导各地农业农村部门做好种子市场监管工作，保障农民用种安全，促进种业acee化，为乡村振兴和农业现代化提供有力支撑。</p>
    `,
  },
  2: {
    title: "关于加强农作物种质资源保护的通知",
    date: "2023-09-28",
    source: "国务院办公厅",
    content: `
      <p>国务院办公厅近日发布《关于加强农作物种质资源保护的通知》，要求各省区市政府为重点保护工作，将其纳入地方政府工作重点。</p>
      <p>通知指出，种质资源是种业创新的物质基础，是农业发展的战略性资源。各地区要健全种质资源保护体系，加强资源收集、鉴定、保存和利用。</p>
      <p>具体措施包括：建设国家和地方种质资源库（圃、场），开展种质资源普查与征集，加强野生近缘植物原生境保护，建立种质资源信息共享平台等。</p>
      <p>通知还强调，要加大投入力度，完善法律法规，加强人才队伍建设，推进种质资源保护和利用的科技创新。</p>
    `,
  },
  3: {
    title: "种子行业质量标准更新",
    date: "2023-08-12",
    source: "国家标准化管理委员会",
    content: `
      <p>国家标准化管理委员会日前发布通知，新版《农作物种子质量标准》将于2024年1月1日起实施。新标准对种子纯度、发芽率、水分含量等关键指标提出了更高要求。</p>
      <p>与旧版标准相比，新标准在以下方面有显著提升：一是提高了主要农作物种子纯度要求；二是细化了种子活力测定方法；三是增加了种子健康指标；四是完善了种子检验规程。</p>
      <p>专家指出，提高种子质量标准是保障农业生产的重要措施。企业应尽快调整生产流程，确保种子质量符合新标准要求，消费者也将从中受益。</p>
    `,
  },
  4: {
    title: "2023年农业补贴政策公布",
    date: "2023-10-20",
    source: "财政部、农业农村部",
    content: `
      <p>财政部与农业农村部联合发布2023年农业补贴政策，进一步加大了对种粮农民的支持力度。新政策在保持原有补贴基础上，增加了种业创新专项补贴。</p>
      <p>新补贴政策主要包括以下几个方面：一是提高农资综合补贴标准；二是扩大耕地地力保护补贴范围；三是设立种业创新补贴；四是加大对生态友好型农业的奖励力度。</p>
      <p>专家表示，此次补贴政策调整，体现了国家对粮食安全和种业发展的高度重视，有利于调动农民种粮积极性，推动种业acee化。</p>
    `,
  },
  5: {
    title: "乡村振兴种子工程启动",
    date: "2023-09-15",
    source: "国家乡村振兴局",
    content: `
        <h3>工程概述</h3>
        <p>国家乡村振兴局日前正式启动"乡村振兴种子工程"，这是一项旨在全面提升农村地区农业生产效率和农民收入的重大工程。该工程将在全国范围内选取100个重点县作为首批试点地区，通过提供优质种子和技术支持，助力农业增产增收。</p>
        
        <h3>具体实施方案</h3>
        <p>根据工程实施方案，将从以下几个方面开展工作：</p>
        <ol>
            <li>组织种业龙头企业开展优质种子捐赠活动，预计首批捐赠价值达5000万元</li>
            <li>选派200名种业技术专家赴实施县开展技术指导和培训</li>
            <li>在每个试点县建设3-5个种子示范基地</li>
            <li>培训本地技术人员不少于1000人次</li>
        </ol>

        <h3>预期成效</h3>
        <p>通过实施乡村振兴种子工程，预计将实现以下目标：</p>
        <ul>
            <li>试点地区农作物良种覆盖率提升至95%以上</li>
            <li>农作物单产提高15-20%</li>
            <li>农民种植收入增加20%以上</li>
            <li>培育一批具有示范效应的种植大户和家庭农场</li>
        </ul>

        <h3>配套政策支持</h3>
        <p>为确保工程顺利实施，相关部门还将配套出台一系列支持政策：</p>
        <p>1. 财政支持：中央财政设立专项资金，用于工程实施过程中的基础设施建设、技术推广等支出。地方财政将按照1:1比例配套资金。</p>
        <p>2. 金融支持：鼓励金融机构对参与工程的农户提供优惠贷款，并降低贷款门槛。农业保险机构将为试点地区种植户提供优惠的保险方案。</p>
        <p>3. 技术支持：组建专家服务团队，提供全程技术指导。建立线上技术咨询平台，为农民提供7×24小时咨询服务。</p>

        <h3>实施进展</h3>
        <p>目前，首批试点县已完成遴选，专家团队已进驻各试点地区开展工作。种子企业捐赠活动已在部分地区启动，受到当地农民热烈欢迎。试点县农民纷纷表示，有了好种子和技术指导，对提高产量、增加收入充满信心。</p>

        <h3>后续规划</h3>
        <p>国家乡村振兴局表示，将根据首批试点情况，总结经验、完善方案，计划在2024年将试点范围扩大到500个县，到2025年实现全国所有国家级乡村振兴重点帮扶县全覆盖。同时，将建立长效机制，推动种业振兴与乡村振兴深度融合，为实现农业农村现代化提供有力支撑。</p>

        <h3>专家观点</h3>
        <p>中国农业大学教授李明认为："乡村振兴种子工程是一项立足当前、着眼长远的重要举措。通过提供优质种子和技术支持，不仅能够直接提高农民收入，更重要的是可以培育一批懂技术、会经营的新型农民，为乡村振兴提供人才支撑。"</p>

        <h3>农民反响</h3>
        <p>河南省示范县农民张大军说："以前种地全靠经验，现在有了专家指导，又是好种子，又是新技术，我们种地更有信心了。去年试种新品种的玉米，亩产比原来提高了30%，今年准备扩大种植面积。"</p>

        <h3>社会影响</h3>
        <p>工程的实施不仅带动了农民增收，也促进了农村社会发展。通过技术培训和示范带动，越来越多的年轻人开始返乡创业，为农村注入了新的活力。同时，种植效益的提升也带动了农产品加工、农村电商等相关产业发展，形成了良性的产业循环。</p>
    `,
  },
  6: {
    title: "农业科技创新基金设立",
    date: "2023-08-05",
    source: "科技部、农业农村部",
    content: `
      <p>科技部与农业农村部联合宣布设立100亿元农业科技创新基金，重点支持种业创新和技术推广，这是实施振兴行动以来最大规模的专项基金。</p>
      <p>该基金将重点投向四个领域：一是种质资源保护与创新利用；二是现代育种技术研发；三是智能化种子生产技术；四是种业科技成果转化与推广。</p>
      <p>专家认为，设立专项基金将有效解决种业科技创新资金不足的问题，促进产学研深度融合，加速培育具有自主知识产权的优良品种，提升我国种业竞争力。</p>
    `,
  },
  7: {
    title: "全国种子交易会将在郑州举行",
    date: "2023-10-25",
    source: "中国种子协会",
    content: `
      <p>中国种子协会宣布，第二十届全国种子交易会将于11月15日至18日在郑州国际会展中心举行，预计参展企业超过500家，展览面积达5万平方米。</p>
      <p>本届种子交易会以"创新引领、绿色发展"为主题，设置展示交易、技术交流、产业对接三大板块。主要农作物新品种、智能种业装备、生物技术成果将集中亮相。</p>
      <p>组委会负责人表示，交易会期间还将举办种业科技创新论坛、种企投融资对接会等活动，为行业交流合作搭建平台，推动种业acee化。</p>
    `,
  },
  8: {
    title: "我国自主研发超级稻获国际认可",
    date: "2023-09-20",
    source: "中国农业科学院",
    content: `
      <p>由我国科研团队自主研发的超级稻新品种"中科优1号"在近日举行的国际水稻评比中获得最高评价，亩产突破800公斤，创造了水稻单产新纪录。</p>
      <p>该品种由中国农业科学院水稻研究所培育，具有高产、优质、抗病、广适等特点，尤其在抗旱性方面有突出表现，受到国际水稻专家的高度认可。</p>
      <p>专家指出，"中科优1号"的成功培育，标志着我国超级稻研发水平已处于国际领先地位，对保障国家粮食安全具有重要意义。目前该品种已在南方稻区推广种植超过1000万亩。</p>
    `,
  },
  9: {
    title: "种业龙头企业战略合作签约",
    date: "2023-08-18",
    source: "农业农村部",
    content: `
      <p>我国五家种业龙头企业日前在北京签署战略合作协议，将在种质资源共享、技术研发、市场开拓等方面展开全面合作，打造种业发展共同体。</p>
      <p>根据协议，五家企业将共同建设种质资源库，开展联合育种，共享科研设施，并在国际市场开拓中相互支持，形成优势互补、互利共赢的发展格局。</p>
      <p>业内专家表示，龙头企业的强强联合，有利于打破资源分散、重复研发等情况，提高资源利用效率，增强我国种业的整体实力和国际竞争力。</p>
    `,
  },
  10: {
    title: "农业部关于推进种业振兴行动的通知",
    date: "2023-07-20",
    source: "农业农村部",
    content: `
      <p>农业农村部近日发布《关于推进种业振兴行动的通知》，提出到2025年培育一批具有国际竞争力的种业企业，建成国家级种业创新中心等目标。</p>
      <p>通知围绕种质资源保护利用、科技创新、企业培育、市场监管四个方面部署重点任务，并提出建立部省联动机制，加大财政支持力度等保障措施。</p>
      <p>专家表示，种业振兴是保障国家粮食安全的战略举措，各地区应结合实际制定具体实施方案，确保各项任务落实到位，推动我国从种业大国向种业强国转变。</p>
    `,
  },
  10: {
    title: "新型农业经营主体培育计划",
    date: "2023-07-25",
    source: "农业农村部",
    content: `
      <p>农业农村部启动新型农业经营主体培育计划，重点支持家庭农场、农民合作社等经营主体...</p>
      <p>计划包括技术培训、资金补贴、市场对接等多项支持措施。</p>
    `,
  },
  11: {
    title: "国际种业发展论坛成功举办",
    date: "2023-07-12",
    source: "中国种业协会",
    content: `
      <p>第十届国际种业发展论坛在北京成功举办，来自全球30多个国家的专家参与研讨...</p>
      <p>论坛聚焦基因编辑技术、数字农业等前沿领域。</p>
    `,
  },
  12: {
    title: "新型农业经营主体培育计划启动",
    date: "2023-07-25",
    source: "农业农村部",
    content: `
      <p>农业农村部正式启动新型农业经营主体培育计划，旨在培育一批规模化、标准化、现代化的农业经营主体。该计划将重点支持家庭农场、农民合作社等新型农业经营主体的发展。</p>
      <p>计划主要包括以下内容：</p>
      <ul>
        <li>提供专项资金支持，用于设施建设和设备购置</li>
        <li>开展系统性培训，提升经营管理水平</li>
        <li>搭建产销对接平台，拓宽市场渠道</li>
        <li>提供优质种子和技术服务支持</li>
      </ul>
      <p>预计到2025年，将培育1万个示范家庭农场和5000个示范农民合作社，带动农业现代化发展。</p>
    `,
  },
  13: {
    title: "农村创业扶持政策出台",
    date: "2023-07-10",
    source: "国家发展改革委",
    content: `
      <p>国家发展改革委联合多部门出台《关于支持农村创业创新的实施意见》，从资金、土地、人才等多个方面为返乡创业人员提供支持。</p>
      <p>政策亮点包括：设立农村创业专项基金、提供创业担保贷款、简化工商注册程序、开展创业培训等。同时，鼓励农业科技人才到农村创业，推动农业科技成果转化。</p>
    `,
  },
  14: {
    title: "农业产业化龙头企业认定结果公布",
    date: "2023-06-28",
    source: "农业农村部",
    content: `
      <p>农业农村部公布2023年农业产业化国家重点龙头企业认定结果，共有150家企业入选。这些企业在带动农民增收、推动农业现代化方面发挥了重要作用。</p>
      <p>入选企业将获得优先享受相关支持政策，包括项目资金支持、用地保障、融资服务等。</p>
    `,
  },
  15: {
    title: "农业保险补贴范围进一步扩大",
    date: "2023-06-15",
    source: "财政部、农业农村部",
    content: `
      <p>财政部、农业农村部联合发布通知，进一步扩大农业保险补贴范围。新增特色农产品保险品种，提高部分险种的保障水平，加大对种植大户、家庭农场等新型农业经营主体的保费补贴力度。</p>
    `,
  },
  16: {
    title: "农村电商扶持计划实施方案发布",
    date: "2023-06-01",
    source: "商务部",
    content: `
      <p>商务部发布《农村电商扶持计划实施方案》，计划在全国建设1000个农村电商示范村，培训10万名农村电商人才，推动农产品上行和工业品下乡。</p>
    `,
  },
  17: {
    title: "首届中国种业科技创新大会召开",
    date: "2023-07-01",
    source: "中国种子协会",
    content: `
      <p>首届中国种业科技创新大会在北京召开，来自全国各地的种业专家、企业代表共同探讨种业科技创新发展方向。大会发布了《中国种业科技创新发展报告》，展示了我国种业科技最新成果。</p>
      <p>会议重点讨论了基因编辑、智能育种等前沿技术的应用前景，并就种业知识产权保护等热点问题进行了深入交流。</p>
    `,
  },
  18: {
    title: "智能育种技术取得重大突破",
    date: "2023-06-20",
    source: "中国农业科学院",
    content: `
      <p>中国农业科学院宣布在智能育种技术领域取得重大突破，开发出新一代育种辅助决策系统。该系统运用人工智能技术，可以大幅提高育种效率，缩短育种周期。</p>
      <p>系统已在水稻、小麦等作物育种中进行试用，育种周期平均缩短30%，选育成功率提高50%。</p>
    `,
  },
  19: {
    title: "种业企业数字化转型研讨会举行",
    date: "2023-06-05",
    source: "中国种子协会",
    content: `
      <p>全国种业企业数字化转型研讨会在南京举行，与会专家就种业企业如何利用大数据、物联网等技术实现数字化转型进行深入探讨。</p>
      <p>会议发布了《种业企业数字化转型指南》，为企业数字化转型提供了实施路径。</p>
    `,
  },
  20: {
    title: "全国种业创新联盟成立",
    date: "2023-05-25",
    source: "农业农村部",
    content: `
      <p>全国种业创新联盟在北京正式成立，首批成员包括50家科研院所、100家种业企业。联盟将整合科研资源，推动产学研协同创新，加快种业科技成果转化。</p>
      <p>联盟计划在未来五年内建设10个种业创新中心，培育100个具有自主知识产权的优良品种。</p>
    `,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // 获取所有新闻标题链接
  const newsLinks = document.querySelectorAll(".news-list-title");
  const modal = document.getElementById("newsModal");
  const closeButton = document.querySelector(".close-button");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalSource = document.getElementById("modalSource");
  const modalContent = document.getElementById("modalContent");

  // 添加一个专门的函数来初始化所有新闻链接点击事件
  function initAllNewsLinks() {
    // 使用更通用的选择器，确保能捕获到所有新闻链接
    const allNewsLinks = document.querySelectorAll("a[data-id]");

    const modal = document.getElementById("newsModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDate = document.getElementById("modalDate");
    const modalSource = document.getElementById("modalSource");
    const modalContent = document.getElementById("modalContent");

    if (!modal || !modalTitle || !modalDate || !modalSource || !modalContent)
      return;

    console.log("找到新闻链接数量:", allNewsLinks.length); // 调试信息

    // 为每个新闻链接添加点击事件
    allNewsLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const newsId = this.getAttribute("data-id");
        console.log("点击了新闻ID:", newsId); // 调试信息

        // 如果有对应的新闻数据，则显示弹窗
        if (newsDatabase[newsId]) {
          const news = newsDatabase[newsId];
          modalTitle.textContent = news.title;
          modalDate.textContent = "发布时间：" + news.date;
          modalSource.textContent = "来源：" + news.source;
          modalContent.innerHTML = news.content;

          // 显示弹窗
          modal.style.display = "block";

          // 禁止背景滚动
          document.body.style.overflow = "hidden";
        }
      });
    });
  }

  // 初始化所有新闻链接的点击事件(首页和列表页)
  initAllNewsLinks();

  // 关闭弹窗
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const modal = document.getElementById("newsModal");
      if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // 点击弹窗外部区域关闭弹窗
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // 添加列表项动画效果
  const listItems = document.querySelectorAll(".news-list-item");
  listItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, 100 + index * 50);
  });

  // 分页相关变量
  const itemsPerPage = 8; // 每页显示8条新闻
  let currentPage = 1;
  let totalPages = 1;
  let newsData = [];

  // 初始化分页功能
  function initPagination() {
    // 获取当前页面的新闻列表
    const newsItems = document.querySelectorAll(".news-list-item");
    if (!newsItems.length) return; // 如果不是列表页面，直接返回

    // 收集所有新闻数据
    newsData = Array.from(newsItems).map((item) => {
      const date = item.querySelector(".news-list-date").textContent;
      const title = item.querySelector(".news-list-title").textContent;
      const id = item.querySelector(".news-list-title").getAttribute("data-id");
      return { date, title, id };
    });

    // 计算总页数
    totalPages = Math.ceil(newsData.length / itemsPerPage);

    // 创建分页控件
    createPaginationControls();

    // 显示第一页数据
    showPage(1);
  }

  // 创建分页控件
  function createPaginationControls() {
    const paginationContainer = document.querySelector(".pagination");
    if (!paginationContainer) return;

    // 清空现有分页控件
    paginationContainer.innerHTML = "";

    // 如果总页数小于等于1，不显示分页控件
    if (totalPages <= 1) {
      if (totalPages === 1) {
        paginationContainer.innerHTML =
          '<a href="#" class="page-item active">1</a>';
      }
      return;
    }

    // 添加上一页按钮
    const prevBtn = document.createElement("a");
    prevBtn.href = "#";
    prevBtn.className = "page-item prev";
    prevBtn.textContent = "< 上一页";
    prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });

    // 禁用第一页的上一页按钮
    if (currentPage === 1) {
      prevBtn.classList.add("disabled");
    }

    paginationContainer.appendChild(prevBtn);

    // 添加页码按钮
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.className = "page-item";
      pageLink.textContent = i;

      if (i === currentPage) {
        pageLink.classList.add("active");
      }

      pageLink.addEventListener("click", function (e) {
        e.preventDefault();
        showPage(i);
      });

      paginationContainer.appendChild(pageLink);
    }

    // 添加下一页按钮
    const nextBtn = document.createElement("a");
    nextBtn.href = "#";
    nextBtn.className = "page-item next";
    nextBtn.textContent = "下一页 >";
    nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });

    // 禁用最后一页的下一页按钮
    if (currentPage === totalPages) {
      nextBtn.classList.add("disabled");
    }

    paginationContainer.appendChild(nextBtn);
  }

  // 显示指定页的数据
  function showPage(pageNum) {
    currentPage = pageNum;

    const container = document.querySelector(".news-items");
    if (!container) return;

    // 计算当前页的数据范围
    const startIndex = (pageNum - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, newsData.length);
    const pageData = newsData.slice(startIndex, endIndex);

    // 清空列表
    container.innerHTML = "";

    // 添加当前页的数据
    pageData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "news-list-item";

      const dateSpan = document.createElement("span");
      dateSpan.className = "news-list-date";
      dateSpan.textContent = item.date;

      const titleLink = document.createElement("a");
      titleLink.href = "#";
      titleLink.className = "news-list-title";
      titleLink.setAttribute("data-id", item.id);
      titleLink.textContent = item.title;

      // 为新创建的链接添加点击事件
      titleLink.addEventListener("click", function (e) {
        e.preventDefault();
        const newsId = this.getAttribute("data-id");

        if (newsDatabase[newsId]) {
          const news = newsDatabase[newsId];
          modalTitle.textContent = news.title;
          modalDate.textContent = "发布时间：" + news.date;
          modalSource.textContent = "来源：" + news.source;
          modalContent.innerHTML = news.content;

          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        }
      });

      listItem.appendChild(dateSpan);
      listItem.appendChild(titleLink);
      container.appendChild(listItem);
    });

    // 应用动画效果
    const listItems = container.querySelectorAll(".news-list-item");
    listItems.forEach((item, index) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.3s ease, transform 0.3s ease";

      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 50 + index * 50);
    });

    // 更新分页控件
    updatePaginationControls();
  }

  // 更新分页控件状态
  function updatePaginationControls() {
    const prevBtn = document.querySelector(".page-item.prev");
    const nextBtn = document.querySelector(".page-item.next");
    const pageItems = document.querySelectorAll(
      ".page-item:not(.prev):not(.next)"
    );

    // 更新页码按钮状态
    pageItems.forEach((item) => {
      if (parseInt(item.textContent) === currentPage) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // 更新上一页按钮状态
    if (prevBtn) {
      if (currentPage === 1) {
        prevBtn.classList.add("disabled");
      } else {
        prevBtn.classList.remove("disabled");
      }
    }

    // 更新下一页按钮状态
    if (nextBtn) {
      if (currentPage === totalPages) {
        nextBtn.classList.add("disabled");
      } else {
        nextBtn.classList.remove("disabled");
      }
    }
  }

  // 初始化分页功能
  initPagination();

  // 添加新闻栏目入场动画
  const newsColumns = document.querySelectorAll(".news-column");
  newsColumns.forEach((column, index) => {
    setTimeout(() => {
      column.classList.add("animated");
    }, 300 + index * 200);
  });

  // 添加事件委托
  document.addEventListener("click", function (e) {
    // 检查点击的是否是新闻链接
    if (e.target.matches(".news-list-title, .news-title a")) {
      e.preventDefault();
      const newsId = e.target.getAttribute("data-id");
      if (newsId) {
        showNewsDetail(newsId);
      }
    }
  });
});

// 添加模态框关闭功能
// 修改CSS样式部分
const modalStyle = document.createElement("style");
modalStyle.innerHTML = `
    .modal {
        display: none;
        position: fixed;
        z-index: 999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    .modal-content {
        background-color: #fff;
        margin: 5% auto;
        padding: 20px;
        width: 70%;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
        position: relative;  /* 新增相对定位 */
    }
    .close-button {
        position: absolute;  /* 绝对定位 */
        right: 20px;
        top: 20px;
        cursor: pointer;
        font-size: 28px;
        font-weight: bold;
        color: #666;
    }
    .close-button:hover {
        color: #000;
    }
    .modal-body {
        overflow-y: auto;
        padding: 10px 15px;
        max-height: calc(80vh - 120px);
        line-height: 1.6;
    }
`;
document.head.appendChild(modalStyle);

// 删除重复的样式定义（约文件末尾）
// 以下重复代码需要删除/注释：
// const modalStyle = document.createElement('style');
// modalStyle.innerHTML = `
//     .modal {
//         display: none;
//         position: fixed;
//         z-index: 999;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         background-color: rgba(0,0,0,0.5);
//     }
//     .modal-content {
//         background-color: #fff;
//         margin: 5% auto;
//         padding: 20px;
//         width: 70%;
//         max-height: 80vh;
//         display: flex;
//         flex-direction: column;
//         position: relative;  /* 新增相对定位 */
//     }
//     .close-button {
//         position: absolute;  /* 绝对定位 */
//         right: 20px;
//         top: 20px;
//         cursor: pointer;
//         font-size: 28px;
//         font-weight: bold;
//         color: #666;
//     }
//     .close-button:hover {
//         color: #000;
//     }
//     .modal-body {
//         overflow-y: auto;
//         padding: 10px 15px;
//         max-height: calc(80vh - 120px);
//         line-height: 1.6;
//     }
// `;
// document.head.appendChild(modalStyle);
// 删除文件末尾的重复事件监听代码（约最后30行）
// document.querySelector('.close-button').addEventListener(...);
// window.onclick = function(...){...}
