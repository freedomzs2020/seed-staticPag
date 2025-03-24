document.addEventListener("DOMContentLoaded", function () {
  // 获取所有新闻标题链接
  const newsLinks = document.querySelectorAll(".news-list-title");
  const modal = document.getElementById("newsModal");
  const closeButton = document.querySelector(".close-button");
  const modalTitle = document.getElementById("modalTitle");
  const modalDate = document.getElementById("modalDate");
  const modalSource = document.getElementById("modalSource");
  const modalContent = document.getElementById("modalContent");

  // 扩展新闻数据库，添加更多新闻数据
  const newsDatabase = {
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
        <p>农业农村部相关负责人表示，下一步将加强《种子管理条例实施细则》的宣传贯彻，指导各地农业农村部门做好种子市场监管工作，保障农民用种安全，促进种业高质量发展，为乡村振兴和农业现代化提供有力支撑。</p>
      `,
    },
    2: {
      title: "关于加强农作物种质资源保护的通知",
      date: "2023-09-28",
      source: "国务院办公厅",
      content: `
        <p>国务院办公厅近日发布《关于加强农作物种质资源保护的通知》，要求各省区市政府高度重视种质资源保护工作，将其纳入地方政府工作重点。</p>
        <p>通知指出，种质资源是种业创新的物质基础，是农业发展的战略性资源。各地区要建立健全种质资源保护体系，加强资源收集、鉴定、保存和利用。</p>
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
        <p>财政部与农业农村部联合发布2023年农业补贴政策，进一步加大对种粮农民的支持力度。新政策在保持原有补贴基础上，增加了种业创新专项补贴。</p>
        <p>新补贴政策主要包括以下几个方面：一是提高农资综合补贴标准；二是扩大耕地地力保护补贴范围；三是设立种业创新补贴；四是加大对生态友好型农业的奖励力度。</p>
        <p>专家表示，此次补贴政策调整，体现了国家对粮食安全和种业发展的高度重视，有利于调动农民种粮积极性，推动种业高质量发展。</p>
      `,
    },
    5: {
      title: "乡村振兴种子工程启动",
      date: "2023-09-15",
      source: "国家乡村振兴局",
      content: `
        <p>国家乡村振兴局日前启动"乡村振兴种子工程"，旨在为脱贫地区和乡村振兴重点帮扶县提供优质种子和技术支持，助力农业增产增收。</p>
        <p>该工程将在全国100个重点县实施，主要内容包括：组织种业龙头企业捐赠优质种子，选派种业专家开展技术指导，建设种子示范基地，培训本地技术人员等。</p>
        <p>据了解，首批参与企业已捐赠价值5000万元的优质种子，并派出200名技术专家赴实施县开展服务。当地农民表示，有了好种子和技术指导，增收信心更足了。</p>
      `,
    },
    6: {
      title: "农业科技创新基金设立",
      date: "2023-08-05",
      source: "科技部、农业农村部",
      content: `
        <p>科技部与农业农村部联合宣布设立100亿元农业科技创新基金，重点支持种业创新和技术推广，这是实施种业振兴行动以来最大规模的专项基金。</p>
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
        <p>组委会负责人表示，交易会期间还将举办种业科技创新论坛、种企投融资对接会等活动，为行业交流合作搭建平台，推动种业高质量发展。</p>
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
        <p>业内专家表示，龙头企业的强强联合，有利于打破资源分散、重复研发等行业痛点，提高资源利用效率，增强我国种业的整体实力和国际竞争力。</p>
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
    // 可以继续添加更多新闻数据...
  };

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

  // 添加一个全局函数处理点击事件
  function showNewsDetail(newsId) {
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
  }
});
