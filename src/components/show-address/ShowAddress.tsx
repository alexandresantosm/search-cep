import '../../styles/components/ShowAddress.scss';

export function ShowAddress() {
  return (
    <div className="container">
      <main>
        <h1>Resultado da Busca por CEP</h1>

        <section>
          <table>
            <thead>
              <tr>
                <th>CEP</th>
                <th>Logradouro</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Localidade</th>
                <th>UF</th>  
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0000000</td>
                <td>Rua A</td>
                <td>Casa</td>
                <td>Meu Bairro</td>
                <td>Minha Localidade</td>
                <td>CE</td>
              </tr>
            </tbody>
          </table>
        </section>

        <button>Nova Busca</button>
      </main>
    </div>
  );
}