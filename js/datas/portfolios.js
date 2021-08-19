const portfoliosDatas = [
  {
    id: 0,
    // cover: "/img/completions/Sanbercode_LaravelWebDeveloperAdvance.png",
    cover:
      "https://esto.my.id/files/images/portfolios-mockup/original-size/sipema.jpg",
    // cover: "/img/heavy-img.jpg",
    // cover: "/img/placeholder-img.png",
    title: "Simulasi Pembelajaran Matematika (SIPEMA)",
    role: "Back-end Developer",
    type: "Web Application",
    desc: `SIPEMA is web based e-learning. This project built for the final project in Software Engineering subject in 5th semester.`,
    // desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
    // quis voluptatum quidem reiciendis corporis praesentium modi nemo
    // consectetur quos numquam.`,
    tools: "CodeIgniter4, MySQL",
    link: "https://sipemaapp.herokuapp.com/",
  },
  // {
  //   id: 1,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Keylex",
  //   role: "Budget/Accounting Analyst III",
  //   type: "Support",
  //   desc: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  //   tools: "HLASM",
  //   link: "https://comsenz.com/rutrum/nulla/tellus/in/sagittis/dui.png?velit=dolor&eu=sit&est=amet&congue=consectetuer&elementum=adipiscing&in=elit&hac=proin&habitasse=risus&platea=praesent&dictumst=lectus&morbi=vestibulum&vestibulum=quam&velit=sapien&id=varius&pretium=ut&iaculis=blandit&diam=non&erat=interdum&fermentum=in&justo=ante&nec=vestibulum&condimentum=ante&neque=ipsum&sapien=primis&placerat=in&ante=faucibus&nulla=orci&justo=luctus&aliquam=et&quis=ultrices&turpis=posuere&eget=cubilia&elit=curae&sodales=duis&scelerisque=faucibus&mauris=accumsan&sit=odio&amet=curabitur&eros=convallis&suspendisse=duis&accumsan=consequat&tortor=dui&quis=nec&turpis=nisi&sed=volutpat&ante=eleifend&vivamus=donec&tortor=ut&duis=dolor&mattis=morbi&egestas=vel&metus=lectus&aenean=in&fermentum=quam&donec=fringilla&ut=rhoncus&mauris=mauris&eget=enim&massa=leo&tempor=rhoncus&convallis=sed&nulla=vestibulum&neque=sit&libero=amet&convallis=cursus",
  // },
  // {
  //   id: 2,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Otcom",
  //   role: "Design Engineer",
  //   type: "Accounting",
  //   desc: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  //   tools: "Psychiatry",
  //   link: "http://blinklist.com/gravida/sem/praesent/id/massa.png?lectus=in&aliquam=lectus&sit=pellentesque",
  // },
  // {
  //   id: 3,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Matsoft",
  //   role: "Accountant IV",
  //   type: "Support",
  //   desc: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  //   tools: "Quantitative Research",
  //   link: "https://google.com/curae/nulla/dapibus/dolor.js?morbi=dui&porttitor=vel&lorem=sem&id=sed&ligula=sagittis&suspendisse=nam&ornare=congue&consequat=risus&lectus=semper&in=porta&est=volutpat&risus=quam",
  // },
  // {
  //   id: 4,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Asoka",
  //   role: "Structural Engineer",
  //   type: "Engineering",
  //   desc: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  //   tools: "Financial Planning",
  //   link: "http://constantcontact.com/odio/consequat.aspx?quam=erat&turpis=curabitur&adipiscing=gravida&lorem=nisi&vitae=at&mattis=nibh&nibh=in&ligula=hac&nec=habitasse&sem=platea&duis=dictumst&aliquam=aliquam&convallis=augue&nunc=quam&proin=sollicitudin&at=vitae&turpis=consectetuer&a=eget&pede=rutrum&posuere=at&nonummy=lorem",
  // },
  // {
  //   id: 5,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Lotstring",
  //   role: "Executive Secretary",
  //   type: "Accounting",
  //   desc: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  //   tools: "HP",
  //   link: "https://geocities.com/quam/sollicitudin/vitae/consectetuer/eget.jsp?proin=lorem&risus=quisque&praesent=ut&lectus=erat&vestibulum=curabitur&quam=gravida&sapien=nisi&varius=at&ut=nibh&blandit=in&non=hac&interdum=habitasse&in=platea&ante=dictumst&vestibulum=aliquam&ante=augue&ipsum=quam&primis=sollicitudin&in=vitae&faucibus=consectetuer&orci=eget&luctus=rutrum&et=at&ultrices=lorem&posuere=integer&cubilia=tincidunt&curae=ante&duis=vel&faucibus=ipsum&accumsan=praesent&odio=blandit&curabitur=lacinia&convallis=erat&duis=vestibulum&consequat=sed&dui=magna&nec=at&nisi=nunc&volutpat=commodo&eleifend=placerat&donec=praesent&ut=blandit&dolor=nam&morbi=nulla&vel=integer&lectus=pede&in=justo&quam=lacinia&fringilla=eget&rhoncus=tincidunt&mauris=eget&enim=tempus&leo=vel&rhoncus=pede&sed=morbi&vestibulum=porttitor&sit=lorem&amet=id&cursus=ligula&id=suspendisse&turpis=ornare&integer=consequat&aliquet=lectus&massa=in&id=est&lobortis=risus&convallis=auctor&tortor=sed&risus=tristique&dapibus=in&augue=tempus&vel=sit&accumsan=amet&tellus=sem&nisi=fusce&eu=consequat&orci=nulla&mauris=nisl&lacinia=nunc&sapien=nisl&quis=duis&libero=bibendum&nullam=felis&sit=sed&amet=interdum&turpis=venenatis&elementum=turpis&ligula=enim&vehicula=blandit&consequat=mi&morbi=in&a=porttitor&ipsum=pede",
  // },
  // {
  //   id: 6,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Job",
  //   role: "Tax Accountant",
  //   type: "Engineering",
  //   desc: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  //   tools: "DNS Server",
  //   link: "https://smh.com.au/mattis/odio/donec.jpg?venenatis=lorem&turpis=vitae&enim=mattis&blandit=nibh&mi=ligula&in=nec&porttitor=sem&pede=duis&justo=aliquam&eu=convallis&massa=nunc&donec=proin&dapibus=at&duis=turpis&at=a&velit=pede&eu=posuere&est=nonummy&congue=integer&elementum=non&in=velit&hac=donec&habitasse=diam&platea=neque&dictumst=vestibulum&morbi=eget&vestibulum=vulputate&velit=ut&id=ultrices&pretium=vel&iaculis=augue&diam=vestibulum&erat=ante&fermentum=ipsum&justo=primis&nec=in&condimentum=faucibus&neque=orci&sapien=luctus&placerat=et&ante=ultrices&nulla=posuere&justo=cubilia&aliquam=curae&quis=donec&turpis=pharetra&eget=magna&elit=vestibulum&sodales=aliquet&scelerisque=ultrices&mauris=erat&sit=tortor&amet=sollicitudin&eros=mi&suspendisse=sit&accumsan=amet&tortor=lobortis&quis=sapien&turpis=sapien&sed=non&ante=mi&vivamus=integer&tortor=ac&duis=neque&mattis=duis&egestas=bibendum&metus=morbi&aenean=non&fermentum=quam&donec=nec&ut=dui&mauris=luctus&eget=rutrum&massa=nulla&tempor=tellus&convallis=in&nulla=sagittis&neque=dui&libero=vel&convallis=nisl&eget=duis&eleifend=ac&luctus=nibh&ultricies=fusce&eu=lacus&nibh=purus&quisque=aliquet&id=at&justo=feugiat&sit=non",
  // },
  // {
  //   id: 7,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Pannier",
  //   role: "Assistant Professor",
  //   type: "Services",
  //   desc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  //   tools: "Open XML",
  //   link: "https://unicef.org/nulla/ultrices/aliquet/maecenas/leo.jsp?cum=blandit&sociis=lacinia&natoque=erat&penatibus=vestibulum&et=sed&magnis=magna&dis=at&parturient=nunc&montes=commodo&nascetur=placerat&ridiculus=praesent&mus=blandit&vivamus=nam&vestibulum=nulla&sagittis=integer&sapien=pede&cum=justo&sociis=lacinia&natoque=eget&penatibus=tincidunt&et=eget&magnis=tempus&dis=vel&parturient=pede&montes=morbi&nascetur=porttitor&ridiculus=lorem&mus=id&etiam=ligula&vel=suspendisse&augue=ornare&vestibulum=consequat&rutrum=lectus&rutrum=in&neque=est&aenean=risus&auctor=auctor&gravida=sed&sem=tristique&praesent=in&id=tempus&massa=sit&id=amet&nisl=sem&venenatis=fusce&lacinia=consequat&aenean=nulla&sit=nisl&amet=nunc&justo=nisl&morbi=duis&ut=bibendum&odio=felis&cras=sed&mi=interdum&pede=venenatis&malesuada=turpis",
  // },
  // {
  //   id: 8,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Asoka",
  //   role: "Payment Adjustment Coordinator",
  //   type: "Engineering",
  //   desc: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  //   tools: "Listings",
  //   link: "http://yellowpages.com/hac/habitasse.aspx?vitae=ante&consectetuer=ipsum&eget=primis&rutrum=in&at=faucibus&lorem=orci&integer=luctus&tincidunt=et&ante=ultrices&vel=posuere&ipsum=cubilia&praesent=curae&blandit=duis&lacinia=faucibus",
  // },
  // {
  //   id: 9,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Stringtough",
  //   role: "Staff Scientist",
  //   type: "Engineering",
  //   desc: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  //   tools: "Zultys",
  //   link: "https://addtoany.com/elit/ac/nulla.xml?a=eu&pede=magna&posuere=vulputate&nonummy=luctus&integer=cum&non=sociis&velit=natoque&donec=penatibus&diam=et&neque=magnis&vestibulum=dis",
  // },
  // {
  //   id: 10,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Home Ing",
  //   role: "Junior Executive",
  //   type: "Research and Development",
  //   desc: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  //   tools: "MCAD",
  //   link: "http://discuz.net/eget/tincidunt.jsp?est=nulla&congue=dapibus&elementum=dolor&in=vel&hac=est&habitasse=donec&platea=odio&dictumst=justo&morbi=sollicitudin&vestibulum=ut&velit=suscipit&id=a&pretium=feugiat&iaculis=et&diam=eros&erat=vestibulum&fermentum=ac&justo=est&nec=lacinia&condimentum=nisi&neque=venenatis&sapien=tristique&placerat=fusce&ante=congue&nulla=diam&justo=id&aliquam=ornare&quis=imperdiet&turpis=sapien&eget=urna&elit=pretium&sodales=nisl&scelerisque=ut&mauris=volutpat&sit=sapien&amet=arcu&eros=sed&suspendisse=augue&accumsan=aliquam&tortor=erat&quis=volutpat&turpis=in&sed=congue&ante=etiam&vivamus=justo&tortor=etiam&duis=pretium&mattis=iaculis&egestas=justo&metus=in&aenean=hac&fermentum=habitasse&donec=platea&ut=dictumst&mauris=etiam&eget=faucibus&massa=cursus&tempor=urna&convallis=ut&nulla=tellus&neque=nulla&libero=ut&convallis=erat&eget=id&eleifend=mauris&luctus=vulputate&ultricies=elementum&eu=nullam&nibh=varius&quisque=nulla&id=facilisi&justo=cras&sit=non&amet=velit&sapien=nec&dignissim=nisi&vestibulum=vulputate&vestibulum=nonummy&ante=maecenas&ipsum=tincidunt&primis=lacus&in=at&faucibus=velit&orci=vivamus&luctus=vel&et=nulla&ultrices=eget&posuere=eros&cubilia=elementum&curae=pellentesque",
  // },
  // {
  //   id: 11,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Voltsillam",
  //   role: "Analog Circuit Design manager",
  //   type: "Product Management",
  //   desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  //   tools: "PXE",
  //   link: "http://nymag.com/proin/interdum/mauris/non.png?laoreet=mi&ut=integer&rhoncus=ac&aliquet=neque&pulvinar=duis&sed=bibendum&nisl=morbi&nunc=non&rhoncus=quam&dui=nec&vel=dui&sem=luctus&sed=rutrum&sagittis=nulla&nam=tellus&congue=in&risus=sagittis&semper=dui&porta=vel&volutpat=nisl&quam=duis&pede=ac&lobortis=nibh&ligula=fusce&sit=lacus&amet=purus&eleifend=aliquet&pede=at&libero=feugiat&quis=non&orci=pretium&nullam=quis&molestie=lectus&nibh=suspendisse&in=potenti&lectus=in&pellentesque=eleifend&at=quam&nulla=a&suspendisse=odio&potenti=in&cras=hac&in=habitasse&purus=platea&eu=dictumst&magna=maecenas&vulputate=ut&luctus=massa&cum=quis&sociis=augue&natoque=luctus&penatibus=tincidunt&et=nulla&magnis=mollis&dis=molestie&parturient=lorem&montes=quisque&nascetur=ut&ridiculus=erat&mus=curabitur&vivamus=gravida&vestibulum=nisi&sagittis=at&sapien=nibh&cum=in&sociis=hac&natoque=habitasse&penatibus=platea&et=dictumst&magnis=aliquam&dis=augue&parturient=quam&montes=sollicitudin&nascetur=vitae&ridiculus=consectetuer&mus=eget&etiam=rutrum&vel=at&augue=lorem&vestibulum=integer&rutrum=tincidunt&rutrum=ante&neque=vel&aenean=ipsum&auctor=praesent&gravida=blandit&sem=lacinia&praesent=erat&id=vestibulum&massa=sed&id=magna&nisl=at&venenatis=nunc&lacinia=commodo&aenean=placerat&sit=praesent&amet=blandit",
  // },
  // {
  //   id: 12,
  //   cover: "http://dummyimage.com/1600x900.png/ff4444/ffffff",
  //   title: "Tresom",
  //   role: "Engineer IV",
  //   type: "Services",
  //   desc: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  //   tools: "GMAT",
  //   link: "http://jalbum.net/nulla.jpg?dolor=magna&sit=vulputate&amet=luctus&consectetuer=cum&adipiscing=sociis&elit=natoque&proin=penatibus&interdum=et&mauris=magnis&non=dis&ligula=parturient&pellentesque=montes&ultrices=nascetur&phasellus=ridiculus&id=mus&sapien=vivamus&in=vestibulum&sapien=sagittis&iaculis=sapien&congue=cum&vivamus=sociis&metus=natoque&arcu=penatibus&adipiscing=et&molestie=magnis&hendrerit=dis&at=parturient&vulputate=montes&vitae=nascetur&nisl=ridiculus&aenean=mus&lectus=etiam&pellentesque=vel&eget=augue&nunc=vestibulum&donec=rutrum&quis=rutrum&orci=neque&eget=aenean&orci=auctor&vehicula=gravida&condimentum=sem",
  // },
  // {
  //   id: 13,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Temp",
  //   role: "Financial Advisor",
  //   type: "Sales",
  //   desc: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  //   tools: "PDH",
  //   link: "http://canalblog.com/aliquam/non/mauris/morbi.aspx?maecenas=fusce&rhoncus=posuere&aliquam=felis&lacus=sed&morbi=lacus",
  // },
  // {
  //   id: 14,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Vagram",
  //   role: "Senior Financial Analyst",
  //   type: "Legal",
  //   desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  //   tools: "EMR",
  //   link: "https://sun.com/etiam/pretium/iaculis/justo.xml?ut=in&ultrices=lectus&vel=pellentesque&augue=at&vestibulum=nulla&ante=suspendisse&ipsum=potenti&primis=cras&in=in&faucibus=purus&orci=eu&luctus=magna&et=vulputate&ultrices=luctus&posuere=cum&cubilia=sociis&curae=natoque&donec=penatibus&pharetra=et&magna=magnis&vestibulum=dis&aliquet=parturient&ultrices=montes&erat=nascetur&tortor=ridiculus&sollicitudin=mus&mi=vivamus&sit=vestibulum&amet=sagittis&lobortis=sapien&sapien=cum&sapien=sociis&non=natoque&mi=penatibus&integer=et&ac=magnis&neque=dis&duis=parturient&bibendum=montes&morbi=nascetur&non=ridiculus&quam=mus&nec=etiam&dui=vel&luctus=augue&rutrum=vestibulum&nulla=rutrum",
  // },
  // {
  //   id: 15,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Redhold",
  //   role: "Librarian",
  //   type: "Sales",
  //   desc: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  //   tools: "Ironport",
  //   link: "http://ucla.edu/quisque/ut/erat/curabitur/gravida/nisi/at.html?sit=venenatis&amet=turpis&erat=enim&nulla=blandit&tempus=mi&vivamus=in&in=porttitor&felis=pede&eu=justo&sapien=eu&cursus=massa&vestibulum=donec&proin=dapibus&eu=duis&mi=at&nulla=velit&ac=eu&enim=est&in=congue&tempor=elementum&turpis=in&nec=hac&euismod=habitasse&scelerisque=platea&quam=dictumst&turpis=morbi&adipiscing=vestibulum&lorem=velit&vitae=id&mattis=pretium&nibh=iaculis&ligula=diam&nec=erat&sem=fermentum&duis=justo&aliquam=nec&convallis=condimentum&nunc=neque&proin=sapien&at=placerat&turpis=ante&a=nulla&pede=justo&posuere=aliquam&nonummy=quis&integer=turpis&non=eget&velit=elit&donec=sodales&diam=scelerisque&neque=mauris&vestibulum=sit&eget=amet&vulputate=eros&ut=suspendisse&ultrices=accumsan&vel=tortor&augue=quis&vestibulum=turpis&ante=sed&ipsum=ante&primis=vivamus&in=tortor&faucibus=duis",
  // },
  // {
  //   id: 16,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Flowdesk",
  //   role: "Project Manager",
  //   type: "Business Development",
  //   desc: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  //   tools: "IVF",
  //   link: "https://loc.gov/sed/tristique/in/tempus/sit.js?in=metus&imperdiet=arcu&et=adipiscing&commodo=molestie&vulputate=hendrerit&justo=at&in=vulputate&blandit=vitae&ultrices=nisl&enim=aenean&lorem=lectus&ipsum=pellentesque&dolor=eget&sit=nunc&amet=donec&consectetuer=quis&adipiscing=orci&elit=eget&proin=orci&interdum=vehicula&mauris=condimentum&non=curabitur&ligula=in&pellentesque=libero&ultrices=ut&phasellus=massa&id=volutpat&sapien=convallis&in=morbi&sapien=odio&iaculis=odio&congue=elementum&vivamus=eu&metus=interdum&arcu=eu&adipiscing=tincidunt&molestie=in&hendrerit=leo&at=maecenas&vulputate=pulvinar&vitae=lobortis&nisl=est&aenean=phasellus&lectus=sit&pellentesque=amet&eget=erat&nunc=nulla&donec=tempus&quis=vivamus&orci=in&eget=felis&orci=eu&vehicula=sapien&condimentum=cursus&curabitur=vestibulum&in=proin&libero=eu&ut=mi&massa=nulla&volutpat=ac&convallis=enim&morbi=in&odio=tempor&odio=turpis&elementum=nec&eu=euismod&interdum=scelerisque&eu=quam&tincidunt=turpis",
  // },
  // {
  //   id: 17,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Mat Lam Tam",
  //   role: "GIS Technical Architect",
  //   type: "Training",
  //   desc: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  //   tools: "Bands",
  //   link: "https://squarespace.com/nascetur/ridiculus/mus.json?at=amet&nulla=erat&suspendisse=nulla&potenti=tempus&cras=vivamus&in=in&purus=felis&eu=eu&magna=sapien&vulputate=cursus&luctus=vestibulum&cum=proin&sociis=eu&natoque=mi&penatibus=nulla&et=ac&magnis=enim&dis=in&parturient=tempor&montes=turpis&nascetur=nec&ridiculus=euismod&mus=scelerisque&vivamus=quam&vestibulum=turpis&sagittis=adipiscing&sapien=lorem&cum=vitae&sociis=mattis&natoque=nibh&penatibus=ligula&et=nec&magnis=sem&dis=duis&parturient=aliquam&montes=convallis&nascetur=nunc&ridiculus=proin&mus=at&etiam=turpis&vel=a&augue=pede&vestibulum=posuere&rutrum=nonummy&rutrum=integer&neque=non&aenean=velit&auctor=donec&gravida=diam&sem=neque&praesent=vestibulum&id=eget&massa=vulputate&id=ut&nisl=ultrices&venenatis=vel&lacinia=augue&aenean=vestibulum&sit=ante&amet=ipsum&justo=primis&morbi=in&ut=faucibus&odio=orci&cras=luctus&mi=et&pede=ultrices&malesuada=posuere&in=cubilia&imperdiet=curae",
  // },
  // {
  //   id: 18,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Treeflex",
  //   role: "Account Representative II",
  //   type: "Marketing",
  //   desc: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  //   tools: "Subversion",
  //   link: "https://gov.uk/dolor/sit/amet.png?ut=morbi&nunc=non&vestibulum=quam&ante=nec&ipsum=dui&primis=luctus&in=rutrum&faucibus=nulla&orci=tellus&luctus=in&et=sagittis&ultrices=dui&posuere=vel&cubilia=nisl&curae=duis&mauris=ac&viverra=nibh&diam=fusce&vitae=lacus&quam=purus&suspendisse=aliquet&potenti=at&nullam=feugiat&porttitor=non&lacus=pretium&at=quis&turpis=lectus&donec=suspendisse&posuere=potenti&metus=in&vitae=eleifend&ipsum=quam&aliquam=a",
  // },
  // {
  //   id: 19,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Namfix",
  //   role: "Chief Design Engineer",
  //   type: "Legal",
  //   desc: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  //   tools: "XML",
  //   link: "https://fc2.com/sit/amet/justo.js?posuere=volutpat&metus=sapien&vitae=arcu&ipsum=sed&aliquam=augue&non=aliquam&mauris=erat&morbi=volutpat&non=in&lectus=congue&aliquam=etiam&sit=justo&amet=etiam&diam=pretium&in=iaculis&magna=justo&bibendum=in&imperdiet=hac&nullam=habitasse&orci=platea&pede=dictumst&venenatis=etiam&non=faucibus&sodales=cursus&sed=urna&tincidunt=ut&eu=tellus&felis=nulla&fusce=ut&posuere=erat&felis=id&sed=mauris&lacus=vulputate&morbi=elementum&sem=nullam&mauris=varius&laoreet=nulla&ut=facilisi&rhoncus=cras&aliquet=non&pulvinar=velit&sed=nec&nisl=nisi&nunc=vulputate&rhoncus=nonummy&dui=maecenas&vel=tincidunt&sem=lacus&sed=at&sagittis=velit&nam=vivamus&congue=vel&risus=nulla&semper=eget&porta=eros&volutpat=elementum&quam=pellentesque&pede=quisque&lobortis=porta&ligula=volutpat&sit=erat&amet=quisque&eleifend=erat&pede=eros&libero=viverra&quis=eget&orci=congue&nullam=eget&molestie=semper&nibh=rutrum&in=nulla&lectus=nunc&pellentesque=purus&at=phasellus&nulla=in&suspendisse=felis&potenti=donec&cras=semper&in=sapien&purus=a&eu=libero&magna=nam&vulputate=dui&luctus=proin&cum=leo&sociis=odio&natoque=porttitor&penatibus=id&et=consequat&magnis=in&dis=consequat&parturient=ut",
  // },
  // {
  //   id: 20,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Veribet",
  //   role: "Health Coach II",
  //   type: "Marketing",
  //   desc: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  //   tools: "DNA replication",
  //   link: "https://usatoday.com/in/tempor.jpg?vulputate=velit&ut=vivamus&ultrices=vel&vel=nulla&augue=eget&vestibulum=eros&ante=elementum&ipsum=pellentesque&primis=quisque&in=porta&faucibus=volutpat&orci=erat&luctus=quisque&et=erat&ultrices=eros&posuere=viverra&cubilia=eget&curae=congue&donec=eget&pharetra=semper&magna=rutrum&vestibulum=nulla&aliquet=nunc&ultrices=purus&erat=phasellus&tortor=in&sollicitudin=felis&mi=donec",
  // },
  // {
  //   id: 21,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Lotlux",
  //   role: "Quality Control Specialist",
  //   type: "Sales",
  //   desc: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  //   tools: "SharePoint Server",
  //   link: "http://histats.com/sed/vel/enim/sit.js?nisl=eget&nunc=eros&rhoncus=elementum&dui=pellentesque&vel=quisque&sem=porta&sed=volutpat&sagittis=erat&nam=quisque&congue=erat&risus=eros&semper=viverra&porta=eget&volutpat=congue&quam=eget&pede=semper&lobortis=rutrum&ligula=nulla&sit=nunc&amet=purus&eleifend=phasellus",
  // },
  // {
  //   id: 22,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Daltfresh",
  //   role: "Social Worker",
  //   type: "Human Resources",
  //   desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  //   tools: "PTLLS",
  //   link: "https://samsung.com/ac/lobortis/vel/dapibus/at/diam.json?ridiculus=id&mus=luctus&etiam=nec&vel=molestie&augue=sed&vestibulum=justo&rutrum=pellentesque&rutrum=viverra&neque=pede&aenean=ac&auctor=diam&gravida=cras&sem=pellentesque&praesent=volutpat&id=dui&massa=maecenas&id=tristique&nisl=est&venenatis=et&lacinia=tempus&aenean=semper&sit=est&amet=quam&justo=pharetra&morbi=magna&ut=ac&odio=consequat&cras=metus&mi=sapien&pede=ut&malesuada=nunc&in=vestibulum&imperdiet=ante&et=ipsum&commodo=primis",
  // },
  // {
  //   id: 23,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Home Ing",
  //   role: "Geological Engineer",
  //   type: "Human Resources",
  //   desc: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  //   tools: "Youth Empowerment",
  //   link: "http://nhs.uk/curabitur/at/ipsum.json?aliquam=pharetra&sit=magna&amet=vestibulum&diam=aliquet&in=ultrices&magna=erat&bibendum=tortor&imperdiet=sollicitudin&nullam=mi&orci=sit&pede=amet&venenatis=lobortis&non=sapien&sodales=sapien&sed=non&tincidunt=mi&eu=integer&felis=ac&fusce=neque&posuere=duis&felis=bibendum&sed=morbi&lacus=non&morbi=quam&sem=nec&mauris=dui&laoreet=luctus&ut=rutrum&rhoncus=nulla&aliquet=tellus&pulvinar=in&sed=sagittis&nisl=dui&nunc=vel&rhoncus=nisl&dui=duis&vel=ac&sem=nibh&sed=fusce&sagittis=lacus&nam=purus&congue=aliquet&risus=at&semper=feugiat&porta=non&volutpat=pretium&quam=quis&pede=lectus&lobortis=suspendisse&ligula=potenti&sit=in&amet=eleifend&eleifend=quam&pede=a&libero=odio&quis=in&orci=hac&nullam=habitasse&molestie=platea&nibh=dictumst&in=maecenas&lectus=ut&pellentesque=massa&at=quis&nulla=augue&suspendisse=luctus&potenti=tincidunt&cras=nulla&in=mollis&purus=molestie",
  // },
  // {
  //   id: 24,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Holdlamis",
  //   role: "Operator",
  //   type: "Accounting",
  //   desc: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  //   tools: "IKE",
  //   link: "https://imgur.com/non/mauris/morbi/non/lectus/aliquam/sit.xml?non=dapibus&interdum=augue&in=vel&ante=accumsan&vestibulum=tellus&ante=nisi&ipsum=eu&primis=orci&in=mauris&faucibus=lacinia&orci=sapien&luctus=quis&et=libero&ultrices=nullam&posuere=sit&cubilia=amet&curae=turpis&duis=elementum&faucibus=ligula&accumsan=vehicula&odio=consequat&curabitur=morbi&convallis=a&duis=ipsum&consequat=integer&dui=a&nec=nibh&nisi=in&volutpat=quis&eleifend=justo&donec=maecenas&ut=rhoncus&dolor=aliquam&morbi=lacus&vel=morbi&lectus=quis&in=tortor&quam=id&fringilla=nulla&rhoncus=ultrices&mauris=aliquet&enim=maecenas&leo=leo&rhoncus=odio&sed=condimentum&vestibulum=id",
  // },
  // {
  //   id: 25,
  //   cover: "http://dummyimage.com/1600x900.png/ff4444/ffffff",
  //   title: "Zoolab",
  //   role: "Electrical Engineer",
  //   type: "Human Resources",
  //   desc: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  //   tools: "TCAD",
  //   link: "https://gravatar.com/sapien/cum/sociis/natoque/penatibus.xml?eros=viverra&suspendisse=diam&accumsan=vitae&tortor=quam&quis=suspendisse&turpis=potenti&sed=nullam&ante=porttitor&vivamus=lacus&tortor=at&duis=turpis&mattis=donec&egestas=posuere&metus=metus&aenean=vitae&fermentum=ipsum&donec=aliquam&ut=non&mauris=mauris&eget=morbi&massa=non&tempor=lectus&convallis=aliquam&nulla=sit&neque=amet&libero=diam&convallis=in&eget=magna&eleifend=bibendum&luctus=imperdiet&ultricies=nullam&eu=orci&nibh=pede&quisque=venenatis&id=non&justo=sodales&sit=sed&amet=tincidunt&sapien=eu&dignissim=felis&vestibulum=fusce&vestibulum=posuere&ante=felis&ipsum=sed&primis=lacus&in=morbi&faucibus=sem&orci=mauris&luctus=laoreet&et=ut&ultrices=rhoncus&posuere=aliquet&cubilia=pulvinar&curae=sed&nulla=nisl&dapibus=nunc&dolor=rhoncus&vel=dui&est=vel&donec=sem&odio=sed&justo=sagittis&sollicitudin=nam&ut=congue",
  // },
  // {
  //   id: 26,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Biodex",
  //   role: "Quality Engineer",
  //   type: "Engineering",
  //   desc: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  //   tools: "Military Affairs",
  //   link: "http://phpbb.com/vitae/consectetuer/eget/rutrum/at/lorem/integer.jpg?tincidunt=et&eu=ultrices&felis=posuere&fusce=cubilia&posuere=curae&felis=donec&sed=pharetra&lacus=magna&morbi=vestibulum&sem=aliquet&mauris=ultrices&laoreet=erat&ut=tortor&rhoncus=sollicitudin&aliquet=mi&pulvinar=sit&sed=amet&nisl=lobortis&nunc=sapien&rhoncus=sapien&dui=non&vel=mi&sem=integer&sed=ac&sagittis=neque&nam=duis&congue=bibendum&risus=morbi&semper=non&porta=quam&volutpat=nec&quam=dui&pede=luctus&lobortis=rutrum&ligula=nulla&sit=tellus&amet=in&eleifend=sagittis&pede=dui&libero=vel&quis=nisl&orci=duis&nullam=ac&molestie=nibh&nibh=fusce&in=lacus&lectus=purus&pellentesque=aliquet&at=at&nulla=feugiat&suspendisse=non&potenti=pretium&cras=quis&in=lectus&purus=suspendisse&eu=potenti&magna=in&vulputate=eleifend&luctus=quam&cum=a",
  // },
  // {
  //   id: 27,
  //   cover: "http://dummyimage.com/1600x900.png/5fa2dd/ffffff",
  //   title: "Flowdesk",
  //   role: "Structural Analysis Engineer",
  //   type: "Marketing",
  //   desc: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  //   tools: "Cerner",
  //   link: "https://tinyurl.com/et/ultrices/posuere.aspx?nisl=velit&nunc=vivamus&rhoncus=vel&dui=nulla&vel=eget&sem=eros&sed=elementum&sagittis=pellentesque&nam=quisque&congue=porta&risus=volutpat&semper=erat&porta=quisque&volutpat=erat&quam=eros&pede=viverra&lobortis=eget&ligula=congue&sit=eget&amet=semper",
  // },
  // {
  //   id: 28,
  //   cover: "http://dummyimage.com/1600x900.png/cc0000/ffffff",
  //   title: "Hatity",
  //   role: "Human Resources Assistant I",
  //   type: "Business Development",
  //   desc: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  //   tools: "Career Development",
  //   link: "https://sakura.ne.jp/duis.jsp?vel=turpis&pede=a&morbi=pede&porttitor=posuere&lorem=nonummy&id=integer&ligula=non&suspendisse=velit&ornare=donec&consequat=diam&lectus=neque&in=vestibulum&est=eget&risus=vulputate&auctor=ut&sed=ultrices&tristique=vel&in=augue&tempus=vestibulum&sit=ante&amet=ipsum&sem=primis&fusce=in&consequat=faucibus&nulla=orci&nisl=luctus&nunc=et&nisl=ultrices&duis=posuere&bibendum=cubilia&felis=curae&sed=donec&interdum=pharetra&venenatis=magna&turpis=vestibulum&enim=aliquet&blandit=ultrices&mi=erat&in=tortor&porttitor=sollicitudin&pede=mi&justo=sit&eu=amet&massa=lobortis&donec=sapien&dapibus=sapien&duis=non&at=mi&velit=integer&eu=ac&est=neque&congue=duis&elementum=bibendum&in=morbi&hac=non&habitasse=quam&platea=nec&dictumst=dui&morbi=luctus&vestibulum=rutrum&velit=nulla&id=tellus&pretium=in&iaculis=sagittis",
  // },
  // {
  //   id: 29,
  //   cover: "http://dummyimage.com/1600x900.png/dddddd/000000",
  //   title: "Kanlam",
  //   role: "Teacher",
  //   type: "Research and Development",
  //   desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  //   tools: "Object Oriented Perl",
  //   link: "https://360.cn/eleifend/pede/libero/quis/orci.json?eros=molestie&suspendisse=sed&accumsan=justo&tortor=pellentesque&quis=viverra&turpis=pede&sed=ac&ante=diam&vivamus=cras&tortor=pellentesque&duis=volutpat&mattis=dui&egestas=maecenas&metus=tristique&aenean=est&fermentum=et&donec=tempus&ut=semper&mauris=est&eget=quam&massa=pharetra&tempor=magna&convallis=ac&nulla=consequat&neque=metus&libero=sapien&convallis=ut&eget=nunc&eleifend=vestibulum&luctus=ante&ultricies=ipsum&eu=primis&nibh=in&quisque=faucibus&id=orci&justo=luctus&sit=et&amet=ultrices&sapien=posuere&dignissim=cubilia&vestibulum=curae&vestibulum=mauris&ante=viverra&ipsum=diam&primis=vitae&in=quam&faucibus=suspendisse&orci=potenti&luctus=nullam&et=porttitor&ultrices=lacus&posuere=at&cubilia=turpis",
  // },
  // {
  //   id: 30,
  //   cover: "http://dummyimage.com/1600x900.png/ff4444/ffffff",
  //   title: "Aerified",
  //   role: "GIS Technical Architect",
  //   type: "Engineering",
  //   desc: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  //   tools: "Oligonucleotide Synthesis",
  //   link: "https://google.com.hk/eget/eros.xml?elementum=dapibus&pellentesque=dolor&quisque=vel&porta=est&volutpat=donec&erat=odio&quisque=justo&erat=sollicitudin&eros=ut&viverra=suscipit&eget=a&congue=feugiat&eget=et&semper=eros&rutrum=vestibulum&nulla=ac&nunc=est&purus=lacinia&phasellus=nisi&in=venenatis&felis=tristique&donec=fusce&semper=congue&sapien=diam&a=id&libero=ornare&nam=imperdiet&dui=sapien&proin=urna&leo=pretium",
  // },
];

export default portfoliosDatas;
