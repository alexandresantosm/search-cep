import '../../styles/components/AddressSearch.scss';

export function AddressSearch() {
  return (
    <div className="container">
      <main>
        <h1>Busca CEP</h1>
        
        <section>
          <label>Digite um CEP</label>
          <input type="text"placeholder="Informe um CEP"/>
          <strong>Não utilize ponto ou traços.</strong>
        </section>

        <button>Buscar</button>
      </main>
    </div>
  );
}