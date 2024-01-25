import { useNodeContractPrepareWrite } from '../../hooks/useLLContractRead';

function Gas() {
  const { config } = useNodeContractPrepareWrite('resourceOut', [
    1000000000000000000,
    28,
    '0xf3e9149a55579582ea5706f9ed105384111b7073cc4a793363d9066bcad16589',
    '0x2e104cd77bebf7fae429722a22bd154419d685fa906a51def781b636284eb01b',
  ]);
  console.log(config);
  return <div>gas</div>;
}

export default Gas;
