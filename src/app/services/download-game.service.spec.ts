import { TestBed } from '@angular/core/testing';

import { DownloadGameService } from './download-game.service';

describe('DownloadGameService', () => {
  let service: DownloadGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
