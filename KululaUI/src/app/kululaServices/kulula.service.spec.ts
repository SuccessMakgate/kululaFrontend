import { TestBed } from '@angular/core/testing';

import { KululaService } from './kulula.service';

describe('KululaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KululaService = TestBed.get(KululaService);
    expect(service).toBeTruthy();
  });
});
