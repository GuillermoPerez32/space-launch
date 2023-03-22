export interface LaunchesResponse {
    count?:    number;
    next?:     string;
    previous?: null;
    results?:  Result[];
}

export interface Result {
    id?:                string;
    url?:               string;
    launch_library_id?: number | null;
    slug?:              string;
    name?:              string;
    img_url?:           null;
    status?:            Status;
    net?:               Date;
    window_end?:        Date;
    window_start?:      Date;
    inhold?:            boolean;
    tbdtime?:           boolean;
    tbddate?:           boolean;
    probability?:       number | null;
    holdreason?:        string;
    failreason?:        string;
    hashtag?:           null | string;
    rocket?:            Rocket;
    mission?:           Mission | null;
    pad?:               Pad;
    image_url?:         null | string;
    infographic_url?:   null;
}

export interface Mission {
    id?:                number;
    launch_library_id?: number | null;
    name?:              string;
    description?:       string;
    type?:              string;
    orbit?:             string;
    orbit_abbrev?:      string;
}

export interface Pad {
    id?:        number;
    agency_id?: number | null;
    name?:      string;
    info_url?:  null;
    wiki_url?:  string;
    map_url?:   string;
    latitude?:  string;
    longitude?: string;
    location?:  PadLocation;
}

export interface PadLocation {
    id?:           number;
    name?:         string;
    country_code?: string;
}

export interface Rocket {
    id?:               number;
    configuration?:    Configuration;
    launcher_stage?:   LauncherStage[];
    spacecraft_stage?: null;
}

export interface Configuration {
    id?:                      number;
    launch_library_id?:       number;
    url?:                     string;
    name?:                    string;
    launch_service_provider?: string;
}

export interface LauncherStage {
    type?:                   string;
    reused?:                 boolean;
    launcher_flight_number?: number;
    launcher?:               Launcher;
    landing?:                Landing;
}

export interface Landing {
    attempt?:     boolean;
    success?:     null;
    description?: string;
    location?:    TypeClass;
    type?:        TypeClass;
}

export interface TypeClass {
    name?:        string;
    abbrev?:      string;
    description?: null | string;
}

export interface Launcher {
    id?:               number;
    url?:              string;
    details?:          string;
    flight_proven?:    boolean;
    serial_number?:    string;
    status?:           string;
    previous_flights?: number;
    image_url?:        string;
}

export interface Status {
    id?:   number;
    name?: Name;
}

export enum Name {
    Go = "Go",
    Tbd = "TBD",
}
