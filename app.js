const TIPO = { LINK: 0, DOWNLOAD: 1, SUBTITULO: 2, PASTA: 3 };

const SETORES = {
  contabil: {
    nome: "Setor Contábil",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Ferramentas e Informação",
        subLinks: [
          { titulo: "Conversor IlovePDF", url: "https://www.ilovepdf.com/pt" },
          { titulo: "Infomoney", url: "https://www.infomoney.com.br/" },
          { titulo: "OFX Fácil", url: "https://www.ofxfacil.com.br/" },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Portais Estaduais e Federais",
        subLinks: [
          {
            titulo: "eCAc",
            url: "https://cav.receita.fazenda.gov.br/autenticacao/login",
          },
          {
            titulo: "ITR",
            url: "https://servicos.receitafederal.gov.br/servico/ditrweb",
          },
          { titulo: "JUCEPAR", url: "https://www.juntacomercial.pr.gov.br/" },
          {
            titulo: "PGMEI",
            url: "https://www8.receita.fazenda.gov.br/SimplesNacional/Aplicacoes/ATSPO/pgmei.app/Identificacao",
          },
          {
            titulo: "Receita Estadual",
            url: "https://receita.pr.gov.br/login",
          },
          {
            titulo: "Receita Federal",
            url: "https://www.gov.br/receitafederal/pt-br",
          },
          {
            titulo: "Redesim",
            url: "https://www.gov.br/empresas-e-negocios/pt-br/redesim",
          },
          {
            titulo: "SicalcWeb",
            url: "https://sicalc.receita.fazenda.gov.br/sicalc/principal",
          },
          { titulo: "SINTEGRA", url: "https://www.sintegra.gov.br/" },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Sistemas de Gestão e Operações",
        subLinks: [
          {
            titulo: "Conta +JE",
            url: "https://contamaisje.tse.jus.br/publico/index",
          },
          { titulo: "Econet", url: "https://www.econeteditora.com.br/" },
          {
            titulo: "FGTS Digital",
            url: "https://fgtsdigital.sistema.gov.br/portal/login",
          },
          {
            titulo: "ISS Curitiba",
            url: "https://financas.curitiba.pr.gov.br/conteudo/iss-curitiba-acesso-ao-sistema-emissao-da-nota-curitibana/70",
          },
          { titulo: "Jettax", url: "https://admin.jettax360.com.br/" },
          {
            titulo: "SISCONT",
            url: "https://crbm-06.implanta.net.br/auth/login?state=https:%2F%2Fcrbm-06.implanta.net.br%2Flogon%2F%3FReturnUrl%3D%252fsiscont%252fsistema%252flogin.aspx%253fReturnUrl%253d%25252fsiscont%25252fdefault.aspx",
          },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.DOWNLOAD,
        titulo: "DIMOB",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/dimob/dimobwin32v2.8g.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "DMED",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/Dmed/2026/Dmed2026Win64v1.1.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "ECF",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/Sped/ECF/SpedEcf_w64-12.2.8.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "IRPF 2026",
        url: "https://downloadirpf.receita.fazenda.gov.br/irpf/2026/irpf/arquivos/IRPF2026Win64v1.5.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "ReceitanetBX",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/ReceitanetBX/ReceitanetBX-1.10.0-x64.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "Sped Contábil",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/Sped/SpedContabil/SPEDContabil_w64-10.4.1.exe",
      },
    ],
  },
  financeiro: {
    nome: "Setor Financeiro",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Bancos e Pagamentos",
        subLinks: [
          { titulo: "Santander", url: "https://www.santander.com.br/" },
          { titulo: "Sicredi", url: "https://www.sicredi.com.br/home/" },
          {
            titulo: "VMpay",
            url: "https://vmpay.vertitecnologia.com.br/g/users/sign_in",
          },
          { titulo: "Xpay", url: "https://br.x-pay.app/login" },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Gestão e Operações",
        subLinks: [
          {
            titulo: "Cloudfy",
            url: "https://contadigital.cloudfy.net.br/login",
          },
          { titulo: "Jettax", url: "https://admin.jettax360.com.br/" },
          { titulo: "Trello", url: "https://id.atlassian.com/login" },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.DOWNLOAD,
        titulo: "Itaú",
        url: "https://guardiao.itau.com.br/UpdateServer/aplicativoitau.msi",
      },
    ],
  },
  fiscal: {
    nome: "Setor Fiscal",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Portais Estaduais e Federais",
        subLinks: [
          {
            titulo: "Emissor Nacional de NFS-e",
            url: "https://www.nfse.gov.br/EmissorNacional/Login",
          },
          {
            titulo: "Receita Estadual do Paraná",
            url: "https://receita.pr.gov.br/login",
          },
          {
            titulo: "Receita Federal — e-CAC",
            url: "https://cav.receita.fazenda.gov.br/autenticacao/login",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Prefeituras",
        subLinks: [
          {
            titulo: "Campo Largo - Autoatendimento IPM",
            url: "https://www.campolargo.pr.gov.br/autoatendimento/",
          },
          {
            titulo: "Curitiba - ISS",
            url: "https://isscuritiba.curitiba.pr.gov.br/iss/default.aspx",
          },
          {
            titulo: "Pinhais - Autoatendimento IPM",
            url: "https://nfse-pinhais.atende.net/autoatendimento/servicos/nfse?redirected=1",
          },
          {
            titulo: "São José dos Pinhais - ISS",
            url: "https://nfe.sjp.pr.gov.br/servicos/issOnline2/",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Sistemas de Consultoria e Gestão",
        subLinks: [
          { titulo: "Econet", url: "https://www.econeteditora.com.br/" },
          { titulo: "Jettax", url: "https://admin.jettax360.com.br/" },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.DOWNLOAD,
        titulo: "SEDIF",
        url: "https://www.fazenda.mg.gov.br/export/sites/fazenda/empresas/declaracoes_demonstrativos/DeSTDA_SEDIF-SN/files/SEDIF010925.zip",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "SPED Contribuições",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/SpedPisCofinsPVA/EFD-Contribuicoes_w64-6.2.0.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "SPED Fiscal ICMS/IPI",
        url: "https://servicos.receita.fazenda.gov.br/publico/programas/Sped/SpedFiscal/SpedEFD_w64-6.1.1.exe",
      },
    ],
  },
  pessoal: {
    nome: "Setor Pessoal",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Certificação e Autenticação",
        subLinks: [
          {
            titulo: "eCac",
            url: "https://cav.receita.fazenda.gov.br/autenticacao",
          },
          {
            titulo: "Vínculo CNPJ/Certificado",
            url: "https://servicos.acesso.gov.br/",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Governo e Empregador",
        subLinks: [
          {
            titulo: "Conectividade Social",
            url: "https://conectividadesocialv2.caixa.gov.br/sicns/",
          },
          {
            titulo: "Consulta Empréstimos",
            url: "https://servicos.mte.gov.br/empregador/#/login",
          },
          {
            titulo: "FGTS Digital",
            url: "https://fgtsdigital.sistema.gov.br/portal/login",
          },
          {
            titulo: "Plataforma Facilita MTE",
            url: "https://www.gov.br/trabalho-e-emprego/pt-br/servicos/facilita",
          },
          {
            titulo: "Seguro Desemprego",
            url: "https://sd.maisemprego.mte.gov.br/sdweb/empregadorweb/index.jsf",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Sistemas de Gestão e Folha",
        subLinks: [
          { titulo: "Melius", url: "https://portal.melius.software/" },
          {
            titulo: "Onvio",
            url: "https://cav.receita.fazenda.gov.br/autenticacao",
          },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.LINK,
        titulo: "Nenhum download disponível no momento.",
        url: null,
      },
    ],
  },
  processos: {
    nome: "Setor de Processos",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Certidões Negativas de Débitos (CND)",
        subLinks: [
          {
            titulo: "CND Estadual Mato Grosso do Sul",
            url: "https://servicos.efazenda.ms.gov.br/pndfis/home/emissao",
          },
          {
            titulo: "CND Estadual Paraná",
            url: "https://cdwfazenda.paas.pr.gov.br/cdwportal/certidao/automatica",
          },
          {
            titulo: "CND FGTS",
            url: "https://consulta-crf.caixa.gov.br/consultacrf/pages/consultaEmpregador.jsf",
          },
          {
            titulo: "CND Municipal Belo Horizonte",
            url: "https://cnd.pbh.gov.br/CNDOnline/",
          },
          {
            titulo: "CND Municipal Campo Grande",
            url: "https://siatportal.campogrande.ms.gov.br/servicos/cidadao/certidao",
          },
          {
            titulo: "CND Municipal Curitiba",
            url: "https://cnd-cidadao.curitiba.pr.gov.br/Certidao/SolicitarCnpj",
          },
          {
            titulo: "CND Trabalhista",
            url: "https://cndt-certidao.tst.jus.br/gerarCertidao",
          },
          { titulo: "Regularize", url: "https://www.regularize.pgfn.gov.br/" },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Juntas Comerciais",
        subLinks: [
          {
            titulo: "Empresa Fácil MA (Maranhão)",
            url: "https://www.empresafacil.ma.gov.br/home/",
          },
          {
            titulo: "Empresa Fácil PR (Paraná)",
            url: "https://www.empresafacil.pr.gov.br/",
          },
          { titulo: "JUCEA (Amazonas)", url: "https://www.jucea.am.gov.br/" },
          { titulo: "JUCEC (Ceará)", url: "https://www.ce.gov.br/jucec/" },
          { titulo: "JUCEG (Goiás)", url: "https://goias.gov.br/juceg/" },
          {
            titulo: "JUCEMAT (Mato Grosso)",
            url: "https://www.jucemat.mt.gov.br/",
          },
          { titulo: "JUCEMG (Minas Gerais)", url: "https://jucemg.mg.gov.br/" },
          {
            titulo: "JUCEMS (Mato Grosso do Sul)",
            url: "https://www.jucems.ms.gov.br/",
          },
          { titulo: "JUCEP (Paraíba)", url: "https://jucep.pb.gov.br/" },
          {
            titulo: "JUCER (Rondônia)",
            url: "https://rondonia.ro.gov.br/jucer/",
          },
          {
            titulo: "JUCERN (Rio Grande do Norte)",
            url: "https://www.jucern.rn.gov.br/",
          },
          {
            titulo: "JUCESC (Santa Catarina)",
            url: "https://www.jucesc.sc.gov.br/",
          },
          {
            titulo: "JUCESP (São Paulo)",
            url: "https://www.jucesponline.sp.gov.br/",
          },
          {
            titulo: "JUCETINS (Tocantins)",
            url: "https://www.to.gov.br/jucetins",
          },
          {
            titulo: "JUCIS-DF (Distrito Federal)",
            url: "https://jucis.df.gov.br/",
          },
          {
            titulo: "JUCISRS (Rio Grande do Sul)",
            url: "https://jucisrs.rs.gov.br/inicial",
          },
          {
            titulo: "Piauí Digital (Piauí)",
            url: "https://www.piauidigital.pi.gov.br/home/junta-comercial/",
          },
          {
            titulo: "Redesim",
            url: "https://www.gov.br/empresas-e-negocios/pt-br/redesim",
          },
          {
            titulo: "VRE Redesim (SP)",
            url: "https://vreredesim.sp.gov.br/home",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Licenciamentos e Registos",
        subLinks: [
          {
            titulo: "ANVISA",
            url: "https://www.gov.br/anvisa/pt-br/setorregulado/autorizacao-de-funcionamento-afe-ou-ae",
          },
          {
            titulo: "Cadastur",
            url: "https://cadastur.turismo.gov.br/hotsite/#!/public/capa/entrar#capaInicio",
          },
          {
            titulo: "CEASA PR",
            url: "https://www.ceasa.pr.gov.br/servicos/Servicos/Meio-Ambiente/Solicitar-licenciamento-ambiental-9OoqbNG0",
          },
          {
            titulo: "Corpo de Bombeiros PR",
            url: "https://www.bombeiros.pr.gov.br/Pagina/Renovacao-de-Licenciamento",
          },
          {
            titulo: "DEAM - Polícia Civil PR",
            url: "https://www.policiacivil.pr.gov.br/Pagina/Explosivos-Armas-e-Municoes",
          },
          {
            titulo: "DPCAP - Polícia Civil PR",
            url: "https://www.policiacivil.pr.gov.br/Editoria/DPCAP",
          },
          {
            titulo: "Licenciamento Ambiental (Curitiba)",
            url: "https://sima.curitiba.pr.gov.br/",
          },
          {
            titulo: "LISA Curitiba",
            url: "https://servicodigital.curitiba.pr.gov.br/servicos-digitais+licenciamento-sanitario+5ec440a6c4e3d801af2e79a3",
          },
          {
            titulo: "PROCEC Curitiba",
            url: "https://procec.curitiba.pr.gov.br/Home/Index/7069OCEC",
          },
          {
            titulo: "URBS",
            url: "https://www.urbs.curitiba.pr.gov.br/portal/",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Trabalho e Empregador",
        subLinks: [
          {
            titulo: "Conectividade Social ICP V2",
            url: "https://conectividadesocialv2.caixa.gov.br/procuracao/#/",
          },
          {
            titulo: "Domicílio Eletrônico Trabalhista (DET)",
            url: "https://det.sit.trabalho.gov.br/login?r=%2Fservicos",
          },
          {
            titulo: "FGTS Digital",
            url: "https://fgtsdigital.sistema.gov.br/",
          },
        ],
      },
      {
        type: TIPO.PASTA,
        titulo: "Tributário e Prefeituras",
        subLinks: [
          {
            titulo: "DEC SP",
            url: "https://www.dec.fazenda.sp.gov.br/DEC/UCLogin/login.aspx",
          },
          { titulo: "Econet", url: "https://www.econeteditora.com.br/" },
          {
            titulo: "ISS Curitiba",
            url: "https://isscuritiba.curitiba.pr.gov.br/iss/default.aspx",
          },
          {
            titulo: "ISS São José dos Pinhais",
            url: "https://nfe.sjp.pr.gov.br/servicos/issOnline2/index.php",
          },
          {
            titulo: "Prefeitura de Campo Largo",
            url: "https://campolargo.atende.net/autoatendimento/servicos",
          },
          {
            titulo: "Receita Estadual PR",
            url: "https://receita.pr.gov.br/login",
          },
          {
            titulo: "Receita Federal (e-CAC)",
            url: "https://cav.receita.fazenda.gov.br/autenticacao/login",
          },
          {
            titulo: "Simples Nacional",
            url: "https://www8.receita.fazenda.gov.br/simplesnacional/",
          },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.LINK,
        titulo: "Nenhum download disponível no momento.",
        url: null,
      },
    ],
  },
  "sistemas-gerais": {
    nome: "Sistemas Gerais",
    links: [
      { type: TIPO.SUBTITULO, titulo: "Web" },
      {
        type: TIPO.PASTA,
        titulo: "Gestão e Comunicação",
        subLinks: [
          { titulo: "Bitrix24", url: "https://www.bitrix24.net/portal/list/" },
          {
            titulo: "Flash",
            url: "https://hros.flashapp.com.br/authentication/login",
          },
          {
            titulo: "Hub de Atendimento",
            url: "https://colaco.smartdata.app.br/",
          },
          { titulo: "Onvio", url: "https://onvio.com.br/" },
          { titulo: "RHiD", url: "https://www.rhid.com.br/v2/#/login" },
        ],
      },
      { type: TIPO.SUBTITULO, titulo: "Download" },
      {
        type: TIPO.DOWNLOAD,
        titulo: "Domínio",
        url: "https://cfdownload.dominiosistemas.com.br/instalacao/contabil/106a10/Instala.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "ExperIP",
        url: "https://experip.com.br/app/ExperIP-3.21.3002_Cloud_X.exe",
      },
      {
        type: TIPO.DOWNLOAD,
        titulo: "Sittax Token/ Bytoken Certificados",
        url: "https://drive.google.com/file/d/1kQOEdFayoMHVKVMAs_WDpQjKAW9P73a7/view",
      },
    ],
  },
};

const $ = (id) => document.getElementById(id);
const lista = $("rows");
const caixaBusca = $("search-box");
const campoBusca = $("search");
const navInicio = document.querySelector(".nav-btn[data-home]");
const menuLateral = document.querySelector("aside");
const btnMenu = $("menu-toggle");
const btnFecharMenu = $("menu-close");
const backdrop = $("drawer-backdrop");

function abrirMenu() {
  if (!menuLateral) return;
  menuLateral.classList.add("open");
  backdrop?.classList.add("open");
  document.body.classList.add("menu-open");
  btnMenu?.setAttribute("aria-expanded", "true");
}

function fecharMenu() {
  if (!menuLateral) return;
  menuLateral.classList.remove("open");
  backdrop?.classList.remove("open");
  document.body.classList.remove("menu-open");
  btnMenu?.setAttribute("aria-expanded", "false");
}

btnMenu?.addEventListener("click", abrirMenu);
btnFecharMenu?.addEventListener("click", fecharMenu);
backdrop?.addEventListener("click", fecharMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharMenu();
});

document
  .querySelectorAll("[data-dep]")
  .forEach((btn) =>
    btn.addEventListener("click", () => carregarSetor(btn.dataset.dep)),
  );
document
  .querySelectorAll("[data-home]")
  .forEach((btn) => btn.addEventListener("click", irInicio));
if (campoBusca)
  campoBusca.addEventListener("input", () => filtrar(campoBusca.value));

function el(tag, texto, classe) {
  const node = document.createElement(tag);
  if (texto) node.textContent = texto;
  if (classe) node.className = classe;
  return node;
}

function abrirView(viewId, navBtn) {
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.toggle("active", v.id === viewId));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.toggle("active", b === navBtn));
  if (campoBusca) campoBusca.value = "";
  fecharMenu();
  window.scrollTo(0, 0);
  document.querySelector("main")?.scrollTo(0, 0);
}

function irInicio() {
  if (navInicio) abrirView("view-dash", navInicio);
}

function filtrar(termo) {
  const texto = termo.toLowerCase();
  lista
    .querySelectorAll(".row, .subtab-header, .folder-container, p.muted")
    .forEach((item) => {
      const matches = item.textContent.toLowerCase().includes(texto);
      item.style.display = matches ? "" : "none";
      if (matches && item.classList.contains("folder-container")) {
        item
          .querySelectorAll(".row, p.muted")
          .forEach((r) => (r.style.display = ""));
      }
    });
}

function mostrarMensagem(texto) {
  if (caixaBusca) caixaBusca.hidden = true;
  lista.replaceChildren(el("p", texto, "muted"));
}

function criarSubtitulo(titulo) {
  return el("h3", titulo, "subtab-header");
}

function criarLinha(item) {
  if (!item.url) {
    return el("p", item.titulo, "muted");
  }
  const linha = el("a", "", "row");
  const info = el("div");
  info.append(el("h4", item.titulo));
  info.append(el("small", item.url));
  Object.assign(linha, {
    href: item.url,
    target: "_blank",
    rel: "noopener noreferrer",
  });
  linha.append(
    info,
    el("span", item.type === TIPO.DOWNLOAD ? "Baixar ↘" : "Abrir ↗"),
  );
  return linha;
}

function criarPasta(item) {
  const container = el("div", "", "folder-container");
  const btn = el("button", item.titulo, "acc-line-btn folder-btn");
  btn.type = "button";
  const panel = el("div", "", "acc-panel folder-panel");
  if (item.subLinks) {
    item.subLinks.forEach((sub) => panel.append(criarLinha(sub)));
  }
  btn.addEventListener("click", () => {
    const isOpen = btn.classList.contains("active");
    document.querySelectorAll(".folder-btn").forEach((b) => {
      b.classList.remove("active");
      b.nextElementSibling.style.maxHeight = null;
      b.nextElementSibling.classList.remove("open");
    });
    if (!isOpen) {
      btn.classList.add("active");
      panel.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + 24 + "px";
    }
  });
  container.append(btn, panel);
  return container;
}

function criarItem(item) {
  if (item.type === TIPO.SUBTITULO) return criarSubtitulo(item.titulo);
  if (item.type === TIPO.PASTA) return criarPasta(item);
  return criarLinha(item);
}

function carregarSetor(chave) {
  const navBtn = document.querySelector(`.nav-btn[data-dep="${chave}"]`);
  if ($("sector-title")) $("sector-title").textContent = navBtn.textContent;
  abrirView("view-sector", navBtn);

  const setor = SETORES[chave];
  const links = setor ? setor.links || [] : [];

  if (links.length === 0) {
    mostrarMensagem(
      "Ainda não existem portais ou ferramentas vinculadas a este setor.",
    );
    return;
  }

  lista.classList.toggle(
    "has-subtabs",
    links.some((l) => l.type === TIPO.SUBTITULO),
  );
  lista.replaceChildren(...links.map(criarItem));
  if (caixaBusca) caixaBusca.hidden = false;
}