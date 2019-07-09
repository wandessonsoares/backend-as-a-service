import { TestBed } from '@angular/core/testing';

import { ContatosDataService } from './contatos-data.service';

describe('ContatosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatosDataService = TestBed.get(ContatosDataService);
    expect(service).toBeTruthy();
  });
});
