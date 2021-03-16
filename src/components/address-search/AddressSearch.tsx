import { Link } from 'react-router-dom';
import { useAddressSearch } from '../../contexts/AddressSearchContext';

import '../../styles/components/AddressSearch.scss';

export function AddressSearch() {
  const { setCep } = useAddressSearch();

  return (
    <div className="container">
      <main>
        <h1>Busca CEP</h1>
        
        <section>
          <label>Digite um CEP</label>
          <input
            type="text"
            placeholder="Informe um CEP"
            onChange={event => setCep(event.target.value)}
          />
          <strong>Não utilize ponto ou traços.</strong>
        </section>

        <Link to="/show">Buscar</Link>
      </main>
    </div>
  );
}