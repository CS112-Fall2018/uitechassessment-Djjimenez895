import { TestBed } from '@angular/core/testing';

import { AddService } from './add.service';

describe('AddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddService = TestBed.get(AddService);
    expect(service).toBeTruthy();
  });
});
