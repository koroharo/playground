# Closure Library を保存しているパス
CLOSUREROOT=../js/closure-library

# Closure Compiler のパス
COMPILERJAR=$(CLOSUREROOT)/compiler.jar


#####################################################################
BUILDER=python $(CLOSUREROOT)/closure/bin/build/closurebuilder.py \
	--output_mode=$(OUTPUTMODE) \
	--compiler_jar=$(COMPILERJAR) \
	--root=app \
	--root=$(CLOSUREROOT) \
	--output_file=$@

DEPSWRITER=python $(CLOSUREROOT)/closure/bin/build/depswriter.py \
	--root_with_prefix="app app" \
	--output_file=$@

OUTPUTMODE=script
#####################################################################

.PHONY: all product clean

all: deps.js index.js uistudy.js

product: OUTPUTMODE=compiled
product: clean all

clean:
ifeq ($(findstring Windows, $(OS)), Windows)
	-del *.js
else
	-rm *.js
endif


deps.js: app/*.js
	$(DEPSWRITER)

### applications
index.js: app/index.js
	$(BUILDER) --namespace=app.index

uistudy.js: app/uistudy.js
	$(BUILDER) --namespace=app.uistudy
