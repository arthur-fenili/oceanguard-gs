import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#f5f0e1] text-[#1e3d59] p-4 pb-10">
      <h1 className="text-4xl m-9 text-[#ffcb77] text-center">Projeto CleanSea</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto max-w-5xl space-y-10 lg:space-y-0 lg:space-x-10">
        <Image src="/colectors-simulation.webp" alt="CleanSea" width={500} height={300} className="w-full lg:w-auto" />
        <div className="flex flex-col items-center justify-center p-4 lg:max-w-md">
          <p className="text-xl text-center lg:text-left">
            O projeto CleanSea, desenvolvido por nós da OceanGuard, visa a instalação de coletores de lixo nos oceanos.
            Esses coletores são projetados para capturar resíduos plásticos e outros detritos trazidos pelas correntes marítimas.
            Cada coletor está equipado com um transmissor alimentado por energia solar e bateria, que emite um sinal de localização para monitoramento e manutenção eficiente.
          </p>
        </div>
      </div>

      <br />

      <h2 className="text-3xl text-[#ffcb77] text-center">Benefícios e Impacto do projeto</h2>

      <br />

      <ol className="list-decimal list-inside text-left max-w-5xl mx-auto space-y-4 p-4">
        <Image src="/grafico_producao_plastico.png" alt="Plastic Pollution" width={950} height={300} className="w-full" />
        <li>
          <span className="font-bold">Redução da Produção de Plástico Global</span>
          <p>
            De acordo com os dados de produção anual de plástico, a quantidade de plástico produzido tem aumentado significativamente desde 1950. 
            A iniciativa CleanSea visa combater essa tendência crescente, recolhendo plástico diretamente dos oceanos e promovendo a 
            reciclagem e a redução do desperdício de plástico.
          </p>
        </li>

        <li>
          <span className="font-bold">Participação de Países no Despejo de Resíduos Plásticos</span>
          <p>
            Diversos países contribuem para a emissão de plásticos nos oceanos. 
            Com a implementação dos coletores CleanSea, esperamos reduzir significativamente a quantidade de plástico mal gerido e descartado, 
            especialmente nas regiões com maior contribuição.
          </p>
        </li>

        <li>
          <span className="font-bold">Destino do Plástico</span>
          <p>
            Os dados mostram que uma grande proporção do lixo plástico é descartado ou mal gerido. 
            O projeto CleanSea promove a reciclagem e a correta gestão dos resíduos plásticos, ajudando a diminuir a poluição marinha e terrestre.
          </p>
        </li>

        <li>
          <span className="font-bold">Poluição da Água nas Cidades</span>
          <p>
            A poluição da água é um problema global que afeta tanto ambientes urbanos quanto naturais. 
            O projeto CleanSea, ao remover resíduos plásticos dos oceanos, contribui para a melhoria da qualidade da água e da saúde dos ecossistemas marinhos e costeiros.
          </p>
        </li>
      </ol>
    </div>
  );
}
