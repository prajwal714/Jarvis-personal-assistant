/**
 * CMOS society
 * logs google search engine code for the caller parent subprocess
 * author: codeZero
 */
const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By;

require('chromedriver');
// require('geckodriver');

/**
 * reference link: https://stackoverflow.com/a/4351548
 * example below
 * $ node process-2.js one two=three four
    0: node
    1: /Users/mjr/work/node/process-2.js
    2: one
    3: two=three
    4: four
 */
var data = {
    "A": [ "Abacavir",
        "Abacavir Sulfate, Lamivudine and Zidovudine",
        "Abarelix",
        "Abciximab",
        "Abiraterone Acetate",
        "Acalabrutinib",
        "Acarbose",
        "Acebutolol",
        "Acenocoumarol",
        "Acetaminophen and Hydrocodone Bitartrate",
        "Acetaminophen and Propoxyphene",
        "acetaminophen_butalbital_caffeine",
        "Acetohexamide",
        "Acitretin",
        "Aclidinium Bromide Oral Inhalation",
        "Acrivastine and Pseudoephedrine",
        "Acyclovir And Hydrocortisone",
        "Adapalene",
        "Adefovir Dipivoxil",
        "Adenosine",
        "Afatinib",
        "Ado-trastuzumab Emtansine",
        "Albuterol (Salbutamol)",
        "Albendazole",
        "Alcaftadine Ophthalmic Solution",
        "Alclometasone Dipropionate",
        "Alectinib",
        "Alemtuzumab",
        "Alfacalcidol",
        "Alglucosidase",
        "Alfuzosin",
        "Aliskiren and valsartan",
        "Aliskiren and Amlodipine",
        "Allantoin",
        "Allylestrenol",
        "Alogliptin",
        "Alogliptin and Pioglitazone",
        "Alpha One-proteinase inhibitor",
        "Alprazolam",
        "Alteplase",
        "Aluminum Hydroxide and Magnesium Hydroxide",
        "Amantadine",
        "Ambrisentan",
        "Amcinonide",
        "Amikacin",
        "Amiloride and Hydrochlorothiazide",
        "Aminoglutethimide",
        "Aminolevulinic acid",
        "Amiodarone",
        "Amitriptyline",
        "Amlexanox",
        "Amlodipine and Benazepril",
        "Amlodipine and Lisinopril",
        "Amlodipine and Olmesartan",
        "Amlodipine Hydrochlorothiazide and Olmesartan",
        "Ammonium Lactate",
        "Amodiaquine",
        "Amoxapine",
        "Amoxicillin and Bromhexine",
        "Amoxicillin and Clavulanate Potassium",
        "Ampenavir",
        "Amphotericin B",
        "Ampicillin and Sulbactam",
        "Amyl Nitrite",
        "Anakinra",
        "Angiotensin II",
        "Anthralin",
        "Antihemophiliac factor",
        "Anti-Inhibitor Coagulant Complex- Vapor Heated",
        "Antivenom",
        "Apixaban",
        "Apraclonidine",
        "Aprepitant",
        "Ardeparin",
        "Argatroban",
        "Aripiprazole",
        "Arteether",
        "Artemether and Lumefantrine",
        "Articane HCl and Epinephrine Injection",
        "Asenapine",
        "Aspirin",
        "Aspirin and Extended Release Dipyridamole",
        "Aspirin, Butalbital and Caffeine",
        "Astemizole",
        "Atenolol",
        "Atezolizumab",
        "Atorvastatin",
        "Atracurium",
        "Atropine Ophthalmic",
        "Auranofin",
        "Avanafil",
        "Avelumab",
        "Axitinib Tablets",
        "Azatadine Maleate",
        "Azelaic Acid",
        "Azelastine and Fluticasone",
        "Azilsartan medoxomil",
        "Azithromycin"
    ], "B": [ "Bacampicillin",
        "Baclofen",
        "Baloxavir marboxil",
        "Bambuterol",
        "Baricitinib",
        "BCG live  - Bacillus Calmette- Guerin",
        "Beclomethasone",
        "Bedaquiline",
        "Belimumab",
        "Belladonna Alkaloid Combinations and Phenobarbital",
        "Bemotrizinol / Bisoctrizole",
        "Benazepril HCl and Hydrochlorothiazide",
        "Benfotiamine",
        "Benoxinate",
        "Benserazide",
        "Benznidazole",
        "Benzonatate",
        "Benzoyl Peroxide and Clindamycin Phosphate",
        "Benztropine",
        "Benzyl benzoate",
        "Beractant",
        "Betahistine",
        "Betamethasone Ophthalmic",
        "Betaxolol Ophthalmic",
        "Betrixaban",
        "Bexarotene",
        "Biafine",
        "Bictegravir, Emtricitabine, and Tenofovir Alafenamide",
        "Bimatoprost",
        "Biotin",
        "Bisacodyl",
        "Bisoprolol",
        "Bivalirudin",
        "Blinatumomab",
        "Bosutinib",
        "Bortezomib",
        "Brentuximab Vedotin",
        "Brexpiprazole",
        "Brimonidine",
        "Brivaracetam",
        "Bromfenac Ophthalmic Solution",
        "Bromocriptine",
        "Buclizine",
        "Budesonide and Formoterol",
        "Bumetanide",
        "Buprenorphine",
        "Bupropion",
        "Buserelin",
        "Busulphan",
        "Butenafine",
        "Butorphanol"
    ], "C": [ "C- 1 esterase inhibitor",
        "Cabergoline",
        "Caffeine",
        "Calcipotriene",
        "Calcitonin- Salmon",
        "Calcium",
        "Calcium Dobesilate",
        "Calfactant",
        "Canagliflozin",
        "Candesartan",
        "Cannabidiol",
        "Capecitabine",
        "Capreomycin",
        "Caprylidene",
        "Captopril",
        "Carbachol",
        "Carbazochrome",
        "Carbidopa-Levodopa",
        "Carbinoxamine",
        "Carbonyl Iron",
        "Carboprost",
        "Carglumic Acid",
        "Carmustine",
        "Carvedilol",
        "Cefaclor",
        "Cefamandole",
        "Cefdinir",
        "Cefepime",
        "Cefixime",
        "Cefotaxime",
        "Cefoxitin",
        "Cefpodoxmine Proxetil",
        "Ceftaroline Fosamil Injection",
        "Ceftibuten",
        "Ceftriaxone",
        "Celecoxib",
        "Cemiplimab-rwlc",
        "Cephalexin",
        "Cephradine",
        "Cerliponase alfa",
        "Cetirizine",
        "Cetrorelix",
        "Cevimeline",
        "Chlorambucil",
        "Chlordiazepoxide",
        "Chlorhexidine",
        "Chlorothiazide",
        "Chloroxine",
        "Chlorpheniramine",
        "Chlorpheniramine and Phenylpropanolamine",
        "Chlorpromazine",
        "Chlorthalidone",
        "Cholecalciferol",
        "Cholestyramine Resin",
        "Choline Magnesium Salicylate",
        "Chondroitin",
        "Chorionic Gonadotropin",
        "Chromium Picolinate",
        "Ciclesonide",
        "Ciclosporin",
        "Cilnidipine",
        "Cimetidine",
        "Cinchocaine",
        "Cinnarizine",
        "Ciprofloxacin and Tinidazole",
        "Cisatracurium Besylate",
        "Citalopram",
        "Citric acid and Sodium Citrate",
        "Clarithromycin",
        "Clevidipine",
        "Clindamycin and Tretinoin",
        "Clobazam",
        "Clofarabine",
        "Clofibrate",
        "Clomiphene",
        "Clonazepam",
        "Clopamide",
        "Clorazepate",
        "Clove oil",
        "Clozapine",
        "Cobimetinib",
        "Codergocrine",
        "Colesevelam Hcl",
        "Colistimethate Injection",
        "Conivaptan",
        "Corticotropin",
        "Cranberry",
        "Crofelemer",
        "Cromolyn Sodium Oral Inhalation",
        "Crotamiton",
        "Cyclandelate",
        "Cyclobenzaprine",
        "Cyclophosphamide",
        "Cyclosporine",
        "Cyproterone Tablet",
        "Cysteamine Ophthalmic Solution",
        "Cytomegalovirus Immune Globulin"
    ], "D": [ "Dabigatran",
        "Dacarbazine",
        "Daclizumab",
        "Dactinomycin",
        "Dalteparin",
        "Danazol",
        "Dapagliflozin",
        "Daptomycin",
        "Darifenacin",
        "Dasatinib",
        "Decitabine",
        "Deferiprone",
        "Defibrotide Injection",
        "Degarelix",
        "Dehydroepiandrosterone",
        "Delamanid",
        "Demecarium",
        "Denileukin Diftitox",
        "Dequalinium",
        "Desflurane",
        "Desirudin",
        "Desmopressin",
        "Desonide",
        "Desvenlafaxine",
        "Dexamethasone Intravitreal Implant",
        "Dexamethasone Oral",
        "Dexlansoprazole",
        "Dexmethylphenidate Hcl",
        "Dexrabeprazole Sodium",
        "Dextran",
        "Dextromethorphan and Quinidine",
        "Diacerein",
        "Diatrizoate and Iodipamide",
        "Diazoxide",
        "Dichlorphenamide",
        "Diclofenac Sodium (Topical Solution)",
        "Diclofenac Sodium Ophthalmic Solution",
        "Dicyclomine",
        "Didanosine",
        "Dienogest and Estradiol Valerate",
        "Diethylcarbamazine",
        "Diethylstilbestrol",
        "Diflorasone Diacetate",
        "Difluprednate Opthalmic Emulsion",
        "Dihydrotachysterol",
        "Diloxanide",
        "Dimenhydrinate",
        "Dimethicone",
        "Dimethyl Fumarate",
        "Dinoprostone",
        "Diosmin",
        "Diphenhydramine",
        "Diphenoxylate",
        "Diphenylpyraline",
        "Dipotassium hydrogen citrate",
        "Disodium Edetate",
        "Disopyramide",
        "Divalproex",
        "Docetaxel",
        "Docosanol",
        "Dofetilide",
        "Dolutegravir",
        "Donepezil",
        "Doravirine",
        "Dorzolamide/Timolol",
        "Doxapram",
        "Doxepin",
        "Doxofylline",
        "Doxycycline",
        "Doxylamine Succinate and Pyridoxine Hydrochloride",
        "Dronabinol",
        "Droperidol",
        "Drospirenone- Estradiol- Levomefolate",
        "Drotrecogin Alfa",
        "Drug Sodium Iodide-i-131",
        "Duloxetine",
        "Durvalumab",
        "Dutasteride And Tamsulosin",
        "Dydrogesterone"
    ], "E": [ "Ebastine",
        "Edetate",
        "Eculizumab",
        "Echothiophate",
        "Efavirenz, Emtricitabine, Tenofovir Disoproxil Fumarate",
        "Efalizumab",
        "Eicosapentaenoic acid",
        "Elapegademase-lvlr",
        "Eliglustat",
        "Elotuzumab",
        "Eluxadoline",
        "Emedastine Difumarate Ophthalmic Solution",
        "Emtricitabine",
        "Emtricitabine- Tenofovir",
        "Enalapril and Hydrochlorothiazide",
        "Enbucrilate",
        "Encorafenib",
        "Enfuvirtide",
        "Entacapone",
        "Enzalutamide",
        "Eperisone",
        "Epinastine HCl Ophthalmic Solution",
        "Epinephrine/ Chlorpheniramine",
        "Eplerenone",
        "Epoprostenol",
        "Eprosartan Mesylate Hydrochlorothiazide",
        "Erdosteine",
        "Ergocalciferol (Vitamin D2)",
        "Ergometrine",
        "Ergotamine Tartrate and Caffeine",
        "Erlotinib",
        "Ertugliflozin",
        "Erythromycin",
        "Erythromycin Ethylsuccinate Granules",
        "Escitalopram",
        "Esomeprazole",
        "Estradiol",
        "Estrogen",
        "Estropipate",
        "Etelcalcetide",
        "Etamsylate",
        "Ethacrynic Acid",
        "Ethiny- Estradiol- Norethindrone",
        "Ethiodized Oil",
        "Ethoheptazine",
        "Ethotoin",
        "Etizolam",
        "Etofylline",
        "Etonogestrel",
        "Etoricoxib",
        "Etynodiol",
        "Everolimus",
        "Exemestane",
        "Ezetimibe",
        "Ezogabine"
    ], "F": [ "Factor IX",
        "Famotidine",
        "Faropenem",
        "Felbamate",
        "Fenofibric Acid",
        "Fenoprofen",
        "Fentanyl Buccal Soluble Film",
        "Fentanyl Sublingual Tablets",
        "Ferrous Ammonium Citrate",
        "Ferrous Gluconate",
        "Ferumoxides",
        "Fesoterodine Fumarate",
        "Fibrin Sealant (Human)",
        "Fidaxomicin",
        "Finafloxacin",
        "Fingolimod",
        "Flavoxate",
        "Flodrocortisone",
        "Flosequinan",
        "Fluconazole",
        "Fludarabine",
        "Flumazenil",
        "Flunisolide",
        "Fluocinonide",
        "Fluorouracil",
        "Fluoxetine and Olanzapine",
        "Flupenthixol",
        "Flupirtine",
        "Flurazepam",
        "Flutamide",
        "Fluvastatin",
        "Folic acid",
        "Fomivirsen",
        "Formaldehyde",
        "Fosamprenavir Calcium",
        "Fosfestrol",
        "Fosinopril",
        "Fosphenytoin",
        "Fostamatinib",
        "Fremanezumab-vfrm",
        "Fulvestrant",
        "Furosemide",
        "Furosemide and Spironolactone"
    ], "G": [ "Gabapentin",
        "Gadobenate- Dimeglumine",
        "Gadodiamide",
        "Gadoxetate Disodium Injection",
        "Gadoterate meglumine",
        "Galcanezumab-gnlm",
        "Ganciclovir",
        "Ganirelix Acetate Injection",
        "Gatifloxacin",
        "Gemcitabine",
        "Gemifloxacin",
        "Gensparin",
        "Gentamicin Ophthalmic",
        "Glatiramer",
        "Glibenclamide",
        "Gliclazide",
        "Glipizide",
        "Glucagon",
        "Glucomannan",
        "Glutamine",
        "Glyburide",
        "Glyceryl Trinitrate",
        "Gold Sodium Thiomalate",
        "Gonadorelin",
        "Gramicidin",
        "Grepafloxacin",
        "Guaifenesin",
        "Guanethidine Monosulfate",
        "Guselkumab"
    ], "H": [ "Haemophilus B Conjugate and Hepatitis B Vaccine",
        "Halcinonide",
        "Halofantrine",
        "Halothane",
        "Hemin",
        "Heparin",
        "Hepatitis B (Recombinant) Vaccine",
        "Hexaminolevulinate Hydrochloride",
        "Histrelin Acetate",
        "Homatropine Hydrobromide",
        "Hyaluronidase",
        "Hydrochlorothiazide",
        "Hydrochlorothiazide and Triamterene",
        "Hydrocodone and Chlorpheniramine",
        "Hydrocortisone",
        "Hydroflumethiazide",
        "Hydrocortisone Valerate",
        "Hydroquinone",
        "Hydroxocobalamin",
        "Hydroxyapatite",
        "Hydroxyurea",
        "Hylan g-f 20",
        "Hyoscyamine",
        "Hypromellose, Dextrose and Glutathione"
    ], "I": [ "Ibalizumab-uiyk",
        "Ibopamine",
        "Ibrutinib",
        "Ibutilide",
        "Icodextrin Peritoneal Dialysis Solution",
        "Idarubicin",
        "Idoxuridine Ophthalmic",
        "Ifosfamide",
        "Iloprost",
        "Imidapril",
        "Imipenem and Cilastatin",
        "Imiquimod",
        "Immune Globulin Subcutaneous",
        "Incobotulinumtoxina",
        "Indapamide",
        "Indinavir",
        "Infliximab",
        "Influenza Virus Vaccine",
        "Inotersen",
        "Insoluble Prussian Blue",
        "Insulin Aspart",
        "Insulin glargine",
        "Insulin Lispro",
        "Interferon Alfa-2b and Ribavirin",
        "Interferon Alfa-N3 -Human Leukocyte derived",
        "Interferon Beta 1A",
        "Interferon Gamma 1B",
        "Intravenous Fat Emulsion",
        "Iobitridol",
        "Iodipamide",
        "Ioflupane I 123",
        "Iopromide",
        "Ioxilan",
        "Ipratropium Bromide",
        "Irbesartan",
        "Irinotecan",
        "Iron Dextran",
        "Isocarboxazid",
        "Isoflurane",
        "Isoniazid",
        "Isopropamide",
        "Isosorbide",
        "Isotretinoin",
        "Isradipine",
        "Itraconazole",
        "Ivacaftor",
        "Ivosidenib",
        "Ixazomib"
    ], "J": [
        "Japanese Encephalitis Virus Vaccine"
    ], "K": [ "Kanamycin",
        "Ketamine",
        "Ketorolac Trometamol Ophthalmic",
        "Ketoprofen"
    ], "L": [ "Labetalol",
        "Lacosamide",
        "Lactobacillus acidophilus",
        "Lafutidine",
        "Lamivudine- Zidovudine",
        "Lanadelumab-flyo",
        "Lansoprazole",
        "Lapatinib",
        "Latanoprost",
        "Ledipasvir and Sofosbuvir",
        "Lenalidomide",
        "Lenvatinib",
        "Lercanidipine",
        "Letrozole",
        "Leuprolide",
        "Levamisole",
        "Levobunolol (Ophthalmic)",
        "Levocarnitine",
        "Levodopa",
        "Levofloxacin",
        "Levomethadyl Acetate",
        "Levorphanol",
        "Levothyroxine",
        "Lidocaine and Prilocaine",
        "Linaclotide",
        "Linagliptin and Metformin Hydrochloride",
        "Lindane",
        "Liothyronine",
        "Liraglutide [rDNA] Injection",
        "Lisinopril",
        "Lithium",
        "Lodoxamide Tromethamine",
        "Lomefloxacin",
        "Lomustine",
        "Lopinavir and Ritonavir",
        "Lorazepam",
        "L-Ornithine L-Aspartate",
        "Losartan",
        "Lovastatin",
        "Loxapine",
        "Lucinactant",
        "Lurasidone",
        "Lutetium Lu 177 dotatate",
        "Lymphocyte Immune Globulin-  Anti-thymocyte"
    ], "M": [ "Macimorelin",
        "Mafenide Acetate",
        "Magnesium Hydroxide",
        "Malathion",
        "Mannitol",
        "Maraviroc",
        "Measles, Mumps and Rubella (MMR) vaccine",
        "Mebeverine",
        "Mecasermin [rDNA origin] Injection",
        "Mechlorethamine",
        "Meclizine",
        "Mecobalamin",
        "Medrysone  Liquifilm Opthalmic",
        "Mefloquine",
        "Melatonin",
        "Meloxicam",
        "Memantine",
        "Meningococcal Conjugate Vaccine",
        "Mepacrine",
        "Meperidine",
        "Mephentermine",
        "Mepivacaine",
        "Meprobamate",
        "Mequinol and Tretinoin",
        "Meropenem",
        "Mesalamine(Mesalazine)",
        "Mesterolone",
        "Metadoxine",
        "Metaproterenol / Orciprenaline",
        "Metaxalone",
        "Methadone",
        "Methazolamide",
        "Methenamine",
        "Methimazole",
        "Methocarbamol",
        "Methotrexate",
        "Methsuximide",
        "Methyl Aminolevulinate Hydrochloride",
        "Methyldopa",
        "Methylhesperidin",
        "Methylphenidate",
        "Methyltestosterone",
        "Metoclopramide",
        "Metoprolol",
        "Metronidazole Topical",
        "Metyrosine",
        "Mezlocillin sodium",
        "Micafungin",
        "Midazolam",
        "Midostaurin",
        "Mifepristone",
        "Miglitol",
        "Milnacipran Hcl",
        "Miltefosine",
        "Minoxidil oral",
        "Mipomersen Injection",
        "Mirtazapine",
        "Mitomycin",
        "Mitoxantrone",
        "Moclobemide",
        "Moexipril HCl Hydrochlorothiazide Tablets",
        "Mogamulizumab-kpkc",
        "Mometasone",
        "Monobenzone",
        "Moricizine",
        "Morphine",
        "Morrhuate Sodium Injection",
        "Moxetumomab pasudotox-tdfk",
        "Moxifloxacin",
        "Multiple Electrolytes Inj",
        "Mupirocin",
        "Mycophenolate Mofetil"
    ], "N": [ "Nabilone",
        "Nadifloxacin",
        "Nadroparin",
        "Nafcillin Sodium",
        "Naftopidil",
        "Naldemedine",
        "Nalmefene",
        "Naloxone",
        "Nandrolone",
        "Naphazoline/ Pheniramine - Ophthalmic",
        "Naproxen and Esomeprazole Magnesium",
        "Naratriptan",
        "Natamycin",
        "Nebivolol",
        "Nedocromil Inhalation Aerosol",
        "Nefopam",
        "Nelfinavir",
        "Neostigmine",
        "Neratinib",
        "Netarsudil",
        "Nevirapine",
        "Niacin Er and Simvastatin",
        "Nicardipine",
        "Niclosamide",
        "Nicotine",
        "Nilotinib",
        "Nimesulide",
        "Nimotuzumab",
        "Niraparib",
        "Nitazoxanide",
        "Nitrazepam",
        "Nitrofurantoin",
        "Nitroglycerin Ointment",
        "Nitroglycerin Tablets, Capsules and Spray",
        "Nivolumab",
        "Norelgestromin and Ethinyl Estradiol",
        "Norethindrone",
        "Norethindrone- Ethinyl Estradiol- Ferrous Fumarate",
        "Norgestimate and Ethinyl Estradiol",
        "Noscapine",
        "Nylidrin- Buphenine",
        "Nystatin and Triamcinolone"
    ], "O": [ "Obiltoxaximab",
        "Ocrelizumab",
        "Ofloxacin",
        "Octreotide",
        "Olaratumab",
        "Olanzapine and Fluoxetine",
        "Olmesartan Medoxomil and Hydrochlorothiazide",
        "Omacetaxine Mepesuccinate",
        "Olopatadine Hydrochloride",
        "Omalizumab",
        "Omeprazole",
        "Omeprazole and Sodium Bicarbonate",
        "Ondansetron",
        "Oral Iron formulation",
        "Orlistat",
        "Ornidazole",
        "Oseltamivir",
        "Ospemifene",
        "Oxaceprol",
        "Oxaliplatin",
        "Oxaprozin",
        "Oxcarbazepine",
        "Oxiconazole",
        "Oxtriphylline",
        "Oxycodone Hydrochloride",
        "Oxyfenbutazone",
        "Oxyphenonium",
        "Oxymetholone",
        "Ozenoxacin",
        "Oxytocin"
    ], "P": [ "Paclitaxel",
        "Palifermin",
        "Palivizumab",
        "Pamabrom",
        "Pancrelipase / Pancreatin",
        "Panitumumab Injection",
        "Pantoprazole",
        "Papaverine",
        "Parecoxib",
        "Paricalcitol",
        "Paromomycin Sulfate",
        "Patisiran",
        "Pazufloxacin",
        "Pegademase Bovine",
        "Pegaspargase",
        "Peginesatide",
        "Pegloticase",
        "Pegvisomant",
        "Pemetrexed",
        "Pemoline",
        "Penfluridol",
        "Penicillin v Potassium",
        "Pentazocine",
        "Pentetate Calcium Trisodium Inj",
        "Pentosan Polysulfate Sodium",
        "Pentoxifylline",
        "Peramivir",
        "Perflutren Protein-Type A Microspheres",
        "Perindopril and Indapamide",
        "Perphenazine",
        "Pethidine",
        "Phenazone",
        "Phendimetrazine Tartrate",
        "Phenindione",
        "Phenobarbitone",
        "Phentermine",
        "Phenylbutazone",
        "Phenytoin",
        "Phosphocol",
        "Phylloquinone",
        "Phytomenadione (Vitamin K)",
        "Pilocarpine Ophthalmic",
        "Pimecrolimus",
        "Pinaverium",
        "Pioglitazone",
        "Pipecuronium",
        "Piperazine",
        "Pirbuterol Acetate",
        "Pirfenidone",
        "Piroctone Olamine",
        "Pitavastatin",
        "Plazomicin",
        "Pneumococcal Vaccine Polyvalent",
        "Plerixafor Injection",
        "Polifeprosan 20 with Carmustine",
        "Policosanol",
        "Ponatinib",
        "Polymyxin, Bacitracin and Neomycin",
        "Posaconazole",
        "Poractant Alfa",
        "Povidone Iodine",
        "Potassium Citrate",
        "Pramlintide Acetate Injection",
        "Pralidoxime",
        "Prasugrel",
        "Pravastatin Sodium",
        "Prednicarbate",
        "Praziquantel",
        "Prednisolone Ophthalmic",
        "Pregabalin",
        "Primaquine",
        "Prep Kit  for Technetium Tc99 Sestamibi",
        "Probenecid",
        "Probucol",
        "Procaine- Penicillin",
        "Prochlorperazine",
        "Promethazine",
        "Progesterone",
        "Propoxyphene",
        "Propantheline",
        "Propylene Glycol",
        "Propyphenazone",
        "Prothionamide",
        "Protriptyline Hydrochloride",
        "Pseudoephedrine and Triprolidine",
        "Psyllium",
        "Pyrazinamide",
        "Pyridoxine",
        "Pyritinol",
        "Pefloxacin"
    ], "Q": [ "Quetiapine",
        "Quinapril HC- Hydrochlorothiazide Tablets",
        "Quinine",
        "Quinupristin and Dalfopristin"
    ], "R": [ "Rabeprazole",
        "Rabies Vaccine",
        "Radium Ra 223 Dichloride",
        "Raloxifene",
        "Ramelteon",
        "Ramucirumab",
        "Ranitidine",
        "Rapacuronium",
        "Rasburicase",
        "Rebamipide",
        "Regadenoson",
        "Remifentanil",
        "Repaglinide and Metformin",
        "Reslizumab",
        "Respiratory Syncitial Virus Immune Globulin",
        "Retinol",
        "Reviparin Sodium",
        "Ribavirin",
        "Riboflavin (Vitamin B2)",
        "Rotavirus Vaccine",
        "Roxatidine",
        "Rucaparib",
        "Rupatadine",
        "Ruxolitinib",
        "Rifapentine",
        "Rifampin",
        "Rimexolone Ophthalmic",
        "Risperidone",
        "Riluzole",
        "Ringers Injection",
        "Rivastigmine",
        "Rivaroxaban",
        "Romiplostim",
        "Rolapitant",
        "Rosiglitazone and Metformin",
        "Rocuronium",
        "Ropivacaine",
        "Rilonacept",
        "Ritonavir"
    ], "S": [ "Sacrosidase",
        "Salbutamol",
        "Salmeterol and Fluticasone",
        "Samarium SM 153 Lexdronam",
        "Saquinavir",
        "Sargramostim",
        "Satranidazole",
        "Saxagliptin and Metformin",
        "Secnidazole",
        "Secretin",
        "Segesterone Acetate and Ethinyl Estradiol",
        "Selenium Sulfide",
        "Senna",
        "Sertaconazole",
        "Sertraline",
        "Sevoflurane",
        "Sildenafil",
        "Siltuximab",
        "Silymarin",
        "Simethicone",
        "Simvastatin and Sitagliptin",
        "Sinecatechins Ointment",
        "Sirolimus",
        "Sitagliptin",
        "Sodium Fusidate",
        "Sodium Nitroprusside",
        "Sodium Picosulphate",
        "Sodium- Potassium- Magnesium Sulfate",
        "Sodium Thiosulphate",
        "Sofosbuvir",
        "Sofosbuvir, Velpatasvir, and Voxilaprevir",
        "Somatostatin",
        "Somatropin",
        "Sorbitol",
        "Sparfloxacin",
        "Spinosad",
        "Spironolactone",
        "Stavudine",
        "Stiripentol",
        "Streptokinase",
        "Streptozocin",
        "Succimer",
        "Sucralfate",
        "Sulbutiamine",
        "Sulfacetamide and Prednisolone",
        "Sulfacetamide Ophthalmic",
        "Sulfamethoxazole",
        "Sulfasalazine",
        "Sulfisoxazole",
        "Sulphaguanidine",
        "Sultamicillin",
        "Sumatriptan Succinate and Naproxen Sodium",
        "Sunitinib",
        "Suramin",
        "Suxamethonium Chloride"
    ], "T": [ "Tacrine",
        "Tafluprost",
        "Tadalafil",
        "Tamoxifen",
        "Taliglucerase Alfa",
        "Tapentadol",
        "Tdap",
        "Technetium Tc 99m Tilmanocept",
        "Technetium Tc99m Medronate Injection",
        "Tecovirimat",
        "Tegafur and Uracil",
        "Tegaserod",
        "Telaprevir",
        "Telbivudine",
        "Telmisartan",
        "Telmisartan and Hydrochlorothiazide",
        "Temazepam",
        "Temsirolimus",
        "Teneligliptin",
        "Tenofovir",
        "Terazosin",
        "Terbutaline",
        "Terfenadine",
        "Teriparatide",
        "Terlipressin",
        "Testolactone",
        "Testosterone Cypionate Injection",
        "Testosterone Fortesta",
        "Tetanus-Diphtheria-Acellular Pertussis (Tdap)",
        "Tetracycline",
        "Tezacaftor and Ivacaftor",
        "Thallous Chloride Tl-201 Injection",
        "Thiabendazole",
        "Thiethylperazine",
        "Thioguanine",
        "Thioridazine",
        "Thiothixene",
        "Thymalfasin",
        "Thyroglobulin",
        "Thyrotropin Alfa",
        "Tiagabine",
        "Tibolone",
        "Ticarcillin",
        "Tigecycline",
        "Tiludronate",
        "Timolol Oral",
        "Tinocordin",
        "Tioconazole",
        "Tiotropium",
        "Tirofiban Hcl",
        "Tobramycin",
        "Tocainide",
        "Tofacitinib",
        "Tolbutamide",
        "Tolfenamic Acid",
        "Tolnaftate",
        "Tolterodine",
        "Topical Clarithromycin",
        "Topotecan",
        "Torsemide",
        "Tositumomab and Iodine 1131 Tositumomab",
        "Trace Metal-5 Combination",
        "Trametinib",
        "Trandolapril- Verapamil",
        "Tranylcypromine",
        "Travoprost",
        "Treprostinil",
        "Triamcinolone",
        "Triamcinolone Inhalation",
        "Triamterene",
        "Tricarbocyanine",
        "Triclosan",
        "Triethanolamine Polypeptide",
        "Trifluopromazine",
        "Trifluridine",
        "Trihexyphenidyl",
        "Trimetazidine Hydrochloride",
        "Trimethobenzamide",
        "Trioxsalen",
        "Triprolidine",
        "Triptorelin Pamoate for Injectable Suspension",
        "Troleandomycin",
        "Trospium Chloride",
        "Trypan Blue",
        "Typhoid Vaccine Live",
        "Tyrothricin"
    ], "U": [ "Ubiquinone / Coenzyme Q10",
        "Uridine triacetate",
        "Undecylenic Acid Topical",
        "Urokinase",
        "Ursodiol"
    ], "V": [ "Vaccinia Immune Globulin Intravenous",
        "Valacyclovir",
        "Valdecoxib",
        "Valganciclovir",
        "Valrubicin",
        "Valsartan and Hydrochlorothiazide",
        "Vandetanib",
        "Varenicline",
        "Vecuronium",
        "Velaglucerase Alfa for Injection",
        "Venetoclax",
        "Verapamil",
        "Vestronidase Alfa",
        "Vilazodone Hydrochloride",
        "Vinblastine",
        "Vindesine",
        "Vinorelbine Tartrate",
        "Vismodegib",
        "Voglibose",
        "Vorinostat"
    ], "W": [ "Warfarin"
    ], "X": [ "Xanthinol Nicotinate", "Xylitol"
    ], "Y": [ "Yellow Fever Vaccine"
    ], "Z": [ "Zafirlukast",
        "Zaleplon",
        "Zileuton",
        "Zanamivir",
        "Zinc Acetate",
        "Zinc Pyrithione",
        "Ziv-Aflibercept",
        "Zolmitriptan",
        "Zonisamide",
        "Zoster Vaccine Live",
        "Zuclopenthixol"
    ]
};
let method = null,
    url = null;
process.argv.forEach((val, index, array) => {
    var path = require('chromedriver').path;

    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    // if (index === 2) { // corresponds to the search method
    //     method = val;
    // } else if(index == 3) { // corresponds to search url
    //     url = val;

        // keep the below block of code in the last part the else if block

        var options = new chrome.Options();
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");
        options.addArguments("--disable-gpu");
        options.addArguments("--headless");
        var arrAnswer = [];

        var driver = new webdriver.Builder()
                            .setChromeOptions(options)
                            .forBrowser('chrome')
                            .build();

        // driver.get(url).then(() => {
        //     driver.findElements(By.className('list-item')).then(cc => {
        //         var count = 0;
        //         cc.forEach(each => {
        //             if (count %2 !== 0) {
        //                 count++;
        //                 console.log(count + ' here')
        //                 return;
        //             } else count++;
        //             each.getAttribute('innerHTML').then(ee => {
        //                 // console.log(ee)
        //                 var text = ee, got = false;
        //                 var len = text.length, c=0;
        //                 for(var i = 0; i < len; i++) {
        //                     if(text[i] === '>')
        //                         c++;
        //                     if(c === 2) {
        //                         c = 0;
        //                         for (var j=1; ; j++) {
        //                             if (text.substring(i+j, i+j+4) === '</a>') {
        //                                 let stringss = text.substring(i+1, i+j-1)
        //                                 console.log('this -> ' + stringss + ' >==<ends here')
        //                                 arrAnswer.push(stringss.trim())
        //                                 got = true
        //                                 break;
        //                             }
        //                         }
        //                     }
        //                     if (got)
        //                         break
        //                 }
        //                 console.log(arrAnswer)
        //             })
        //         })
        //     });
        // });

        const BASEURL = 'https://www.medindia.net/doctors/drug_information/',
            ENDWARE = '.htm';
        for (var key in data) {
            let medicines = data[key];
            for (var i = 0; i< medicines.length; i++) {
                driver.get(BASEURL + medicines + ENDWARE).then(data => {
                    driver.findElements(By.className('drug-content')).then(loop => {
                        var count = 0;
                        loop.forEach(itr => {
                            if (count == 0) {
                                count++;
                                return;
                            } else {
                                count++;
                            }
                            itr.getAttribute('innerText').then(text => {
                                console.log('count -> ' + count);
                                console.warn(text);
                            });
                        });
                    });
                });
            }
        }
    // }
})

