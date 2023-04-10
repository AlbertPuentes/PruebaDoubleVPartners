describe('Busqueda de vuelo en Wingo', () => {
  beforeEach(() => {
    cy.visit('https://www.wingo.com'); // ingresar a pagina Wingo
    
})

    it('Buscar un vuelo Bogotá a Cali ida y regreso para dos adultos con fecha ida 29/04/2023 y vuelta 31/05/2023', () => {

      //Seleccionar Tabla de Vuelos
      cy.get('.btn-search').click({force: true});

      //Marcar la opcion Ida y vuelta
      cy.get('#btnIdaVuelta > span').click();
      cy.get('#btnIdaVuelta > .circle').should('have.class', 'circle active');//Verificar que se selecciono la opcion Ida y Vuelta

      //Desplegar lista de cuidades origen
      cy.get('.input-origen > .select-drop > .info-airport > .select > .styledSelect').click(); 
      cy.get('[data-cod="BOG"] > .textCity').click(); //Seleccionar a Bogota de la lista
      cy.get('.styledSelect.styledSelectOrigen').should('contain', 'Bogotá (BOG) El Dorado');//Verificar que se selecciono a Bogota 

      // seleccionar la ciudad destino Cali
      cy.get('#comboDestino > [data-cod="CLO"] > .textCity').click();
      cy.get('.styledSelect.styledSelectDestino').should('contain', 'Cali (CLO) Alfonso Bonilla Aragón');//Verificar que se selecciono a Cali 

      //seleccionar fecha de ida
      cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(5) > :nth-child(6) > .day').click();
      cy.get('.info-select.info-select-start').should('contain', '29/04/2023');//Verificar que se selecciono la fecha 29/04/2023

      //seleccionar fecha de vuelta
      cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month2 > tbody > :nth-child(5) > :nth-child(3) > .day').click();
      cy.get('.info-select.info-select-end').should('contain', '31/05/2023');//Verificar que se selecciono la fecha 31/05/2023

      //desplegar lista para seleccionar pasajeros
      cy.get('#selectPasj > .info-airport').click();
      cy.get(':nth-child(1) > .info').should('contain', 'Adultos');//Verificar que se despliegue la opcion Adultos

      cy.get(':nth-child(1) > .bts-add > .plus').click();//Agregar +1 adulto 
      cy.get('#adultos').should('contain', '2');//Verificar que se selecciono 2 adultos
      cy.get('#tPasajeros').click();//cerrar lista desplegable
      cy.get('#tPasajeros').should('contain','Pasajeros' ).and('contain', '2');//Verificar que se selecciono 2 pasajeros

      //verificar que se encuentra disponible el boton Buscar vuelo
      cy.get('.btn-search').should('have.class', 'btn-search bt-search').contains('Buscar vuelo');
      //seleccionar boton Buscar vuelo
      cy.get('.btn-search').click();

    })

  
})
