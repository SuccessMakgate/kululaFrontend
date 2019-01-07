import { TestBed, async, inject } from '@angular/core/testing';

import { KululaGuard } from './kulula.guard';

describe('KululaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KululaGuard]
    });
  });

  it('should ...', inject([KululaGuard], (guard: KululaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
