import { Link } from 'react-router-dom';
import { useAddressSearch } from '../../contexts/AddressSearchContext';
import '../../styles/components/ShowAddress.scss';

export function ShowAddress() {
  const { address } = useAddressSearch();

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
                <td>{address.cep}</td>
                <td>{address.logradouro}</td>
                <td>{address.complemento}</td>
                <td>{address.bairro}</td>
                <td>{address.localidade}</td>
                <td>{address.uf}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <Link to="/">Nova Busca</Link>
      </main>
    </div>
  );
}